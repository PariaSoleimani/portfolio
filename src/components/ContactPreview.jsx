'use client';

import { PERSONAL_LINKS } from '@lib/constants';
import { useEffect, useRef } from 'react';
import { VscChevronRight } from 'react-icons/vsc';

const scopeContactCss = css => css.replace(/:root/g, '.contact-preview');

const ContactPreview = ({ css = '' }) => {
	const rootRef = useRef(null);

	useEffect(() => {
		const root = rootRef.current;
		if (!root) {
			return;
		}

		const style = document.createElement('style');
		style.dataset.contactUserStyles = '';
		style.textContent = scopeContactCss(css);
		root.prepend(style);

		return () => style.remove();
	}, [css]);

	return (
		<div
			ref={rootRef}
			className="contact-preview">
			<div className="preview-stack">
				<p className="text-mono">Get in touch</p>
				<h2>Let&apos;s work together.</h2>
				<p className="text-description">
					Have a project, an idea, or a problem worth solving? Choose
					a channel and leave a message.
				</p>
			</div>

			<div className="contact-card preview-block">
				<nav className="flex flex-col gap-3">
					{Object.entries(PERSONAL_LINKS).map(([, link]) => {
						const Icon = link?.icon || VscChevronRight;

						return (
							<a
								key={link.label}
								href={link.href}
								target={
									link?.href?.startsWith('mailto:')
										? undefined
										: '_blank'
								}
								rel={
									link?.href?.startsWith('mailto:')
										? undefined
										: 'noreferrer noopener'
								}
								className="contact-link group">
								<span className="row">
									<Icon className="icon-accent" />
									<span className="text-mono">
										{link?.label}
									</span>
								</span>
								<span className="contact-link__value">
									{link?.value}
								</span>
								<VscChevronRight className="contact-link__arrow" />
							</a>
						);
					})}
				</nav>

				<p className="contact-status">
					<span className="contact-status__dot" />
					Available for thoughtful collaborations
				</p>
			</div>
		</div>
	);
};

export default ContactPreview;
