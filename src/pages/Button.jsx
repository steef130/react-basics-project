import { Button as CButton } from '@chakra-ui/react';

export const Button = ({  ...props }) => (
	<CButton colorScheme="teal" variant='outline' onClick={() => window.location.href = '/'} {...props}>
		{props.children}
	</CButton>
);