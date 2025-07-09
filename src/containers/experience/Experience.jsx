import React from 'react';
import './experience.css';
import CommonBackground from '../../components/CommonBackground';
const Experience = () => {
	const cardFunction = () => {
		const linkBox = document.getElementsByClassName('link-box');
		return function (e) {
			linkBox.foreach((_, i) => {
				e.preventDefault(linkBox[i]);
			});
		};
	};

	return (
		<>
			<div className='experience-container w-100 '>
				<CommonBackground />
				<div className='experience-inner w-100  flex-centered'>
					<div className='experience-contents w-80'>
						<div className='experience-title w-100 flex-column-start'>
							Dive into my works...
						</div>
						<div className='cards-row'>
							<div className='cards w-100 flex-column-start'>
								<div className='card h-40 w-30'>
									<a
										href='https://payu365.vercel.app/'
										target='blank'
									>
										<div
											className='link-box adjust'
											onClick={cardFunction}
										>
											<h3>PayU365</h3>
											<p>Payment interface made with Next js and redux.</p>
										</div>
									</a>
								</div>
							</div>
						</div>
						<div className='cards-row'>
							<div className='cards w-100 flex-column-end'>
								<div className='card h-40 w-30'>
									<a
										href='https://payu365admin.vercel.app/'
										target='blank'
									>
										<div
											className='link-box adjust'
											onClick={cardFunction}
										>
											<h3>PayU365 Admin</h3>
											<p>
												Admin site for payu365 made with Next js and redux .
											</p>
										</div>
									</a>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className='experience-container w-100'>
				<CommonBackground />
				<div className='experience-inner w-100  flex-centered'>
					<div className='experience-contents w-80'>
						<div className='cards-row add-margin'>
							<div className='cards w-100 flex-column-start'>
								<div className='card h-40 w-30'>
									<a
										href='https://payu365cms.vercel.app/'
										target='blank'
									>
										<div
											className='link-box adjust'
											onClick={cardFunction}
										>
											<h3>PayU365 CMS</h3>
											<p>
												Content management system for payu365 made with Next js
												and redux .
											</p>
										</div>
									</a>
								</div>
							</div>
						</div>
						<div className='cards-row add-margin'>
							<div className='cards w-100 flex-column-end'>
								<div className='card h-40 w-30'>
									<a
										href='https://payu365blockchain.vercel.app/'
										target='blank'
									>
										<div
											className='link-box adjust'
											onClick={cardFunction}
										>
											<h3>PayU Blockchain</h3>
											<p>
												Next js app with web 3, wagmi, viem, Metamask & coin
												gecko api integration
											</p>
										</div>
									</a>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className='experience-container w-100'>
				<CommonBackground />
				<div className='experience-inner w-100  flex-centered'>
					<div className='experience-contents w-80'>
						<div className='cards-row add-margin'>
							<div className='cards w-100 flex-column-start'>
								<div className='card h-40 w-30'>
									<a
										href='https://dev.d24g9k0ba6iut7.amplifyapp.com/'
										target='blank'
									>
										<div
											className='link-box adjust'
											onClick={cardFunction}
										>
											<h3>Expensify</h3>
											<p>Expense tracking app made with Next js and redux.</p>
										</div>
									</a>
								</div>
							</div>
						</div>
						<div className='cards-row add-margin'>
							<div className='cards w-100 flex-column-end'>
								<div className='card h-40 w-30'>
									<a
										href='https://dev.d3usebntg3hnpw.amplifyapp.com/'
										target='blank'
									>
										<div
											className='link-box adjust'
											onClick={cardFunction}
										>
											<h3>Digichat Hub</h3>
											<p>Chatting app made with Next js and redux</p>
										</div>
									</a>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default Experience;
