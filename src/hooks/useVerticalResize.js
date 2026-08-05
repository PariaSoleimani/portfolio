'use client';

import { useCallback, useRef, useState } from 'react';

export const useVerticalResize = ({
	defaultHeight,
	collapsedHeight,
	maxHeight,
} = {}) => {
	const [height, setHeight] = useState(defaultHeight);
	const dragRef = useRef({ startY: 0, startHeight: defaultHeight });
	const isCollapsed = height <= collapsedHeight;

	const onPointerDown = useCallback(
		event => {
			event.preventDefault();
			dragRef.current = {
				startY: event.clientY,
				startHeight: height,
			};
			event.currentTarget.setPointerCapture(event.pointerId);
		},
		[height],
	);

	const onPointerMove = useCallback(
		event => {
			if (!event.currentTarget.hasPointerCapture(event.pointerId)) {
				return;
			}

			const { startY, startHeight } = dragRef.current;
			const nextHeight = Math.min(
				maxHeight,
				Math.max(
					collapsedHeight,
					startHeight + startY - event.clientY,
				),
			);
			setHeight(nextHeight);
		},
		[collapsedHeight, maxHeight],
	);

	const onPointerUp = useCallback(event => {
		if (event.currentTarget.hasPointerCapture(event.pointerId)) {
			event.currentTarget.releasePointerCapture(event.pointerId);
		}
	}, []);

	return {
		height,
		isCollapsed,
		handleProps: {
			onPointerDown,
			onPointerMove,
			onPointerUp,
			onPointerCancel: onPointerUp,
		},
	};
};
