import React, { ReactNode } from 'react';

function AuthLayout({ children }: { children: ReactNode }) {
	return (
		<div className='relative h-screen w-full flex justify-center items-center flex-col'>
			<div className='mt-12'>{children}</div>
		</div>
	);
}
export default AuthLayout;
