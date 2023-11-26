import {
	Avatar,
	Box,
	Button,
	Card,
	FormControl,
	Grid,
	OutlinedInput,
	Typography,
} from '@mui/material';
import { useEffect, useRef, useState } from 'react';
import { IoIosSend } from 'react-icons/io';
import { useMediaQuery } from 'react-responsive';

export default function Root() {
	const [messages, setMessages] = useState([
		{ type: 'sender', message: 'Hello everynyan, how are you? Fine thank you' },
		{ type: 'receiver', message: 'OH MAH GAH' },
	]);

	useEffect(() => {
		document.getElementById('scrollToBottom').scrollIntoView();
	}, [messages.length]);

	return (
		<>
			<Grid
				container
				sx={{
					display: 'grid',
					gridTemplateRows: '1fr 75px',
					height: '95vh',
					overflow: 'hidden',
				}}
			>
				<Grid item sx={{ overflow: 'scroll' }}>
					{messages.map((e, i) => {
						if (e.type === 'sender') {
							return <Sender text={e.message} />;
						} else if (e.type === 'receiver')
							return <Receiver text={e.message} />;
					})}
					<Box id='scrollToBottom' />
				</Grid>
				<Grid item>
					<Grid
						container
						sx={{
							width: '98%',
							height: '100%',
							alignItems: 'center',
							justifyContent: 'center',
						}}
					>
						<ChatBox setMessages={setMessages} messages={messages} />
					</Grid>{' '}
				</Grid>
			</Grid>{' '}
		</>
	);
}

function Receiver(props) {
	const text = props.text;

	return (
		<>
			<Grid
				container
				sx={{
					flexDirection: 'row',
					justifyContent: 'start',
					gap: '10px',
				}}
			>
				<Grid item>
					<Avatar sx={{ border: '1px solid primary.main' }} />
				</Grid>
				<Grid item>
					<Typography sx={{ marginLeft: '0.25rem', color: 'contrastColor' }}>
						Sir Lorem
					</Typography>
					<TextBlock type='receiver' text={text} />
				</Grid>
			</Grid>
		</>
	);
}

function Sender(props) {
	const text = props.text;

	return (
		<>
			<Grid
				container
				sx={{
					justifyContent: 'end',
					padding: '5px 20px',
					flexWrap: 'nowrap',
				}}
			>
				<TextBlock type='sender' text={text} />
			</Grid>
		</>
	);
}

function TextBlock(props) {
	return (
		<>
			<Grid item>
				<Grid
					container
					sx={{ justifyContent: props.type === 'sender' ? 'end' : 'start' }}
				>
					<Card
						variant='outlined'
						sx={{
							maxWidth: '50vw',
							minWidth: '100px',
							backgroundColor: 'primary.main',
							color: 'white',
							padding: '10px 20px',
							borderRadius: '13px',
							lineBreak: 'anywhere',
							borderColor: 'secondary.main',
							borderWidth: '3px',
						}}
					>
						<Typography>{props.text}</Typography>
					</Card>
				</Grid>
			</Grid>
		</>
	);
}

function ChatBox(props) {
	const [chatboxInputValue, setChatboxInputValue] = useState('');

	function pushValue() {
		if (chatboxInputValue !== '') {
			const inputMessage = {
				type: 'sender',
				message: chatboxInputValue,
			};
			props.setMessages([...props.messages, inputMessage]);
			document.getElementById('scrollToBottom').scrollIntoView();
			setChatboxInputValue('');
		} else {
			window.alert('Please enter something');
		}
	}

	return (
		<Grid
			container
			sx={{
				width: '100%',
				display: 'grid',
				gridTemplateColumns: '1fr 60px',
				gap: '10px',
			}}
		>
			<FormControl sx={{ flexDirection: 'row', width: '100%' }}>
				<OutlinedInput
					onChange={(e) => {
						setChatboxInputValue(e.target.value);
					}}
					value={chatboxInputValue}
					autoFocus
					placeholder='Type a message'
					multiline
					fullWidth
					sx={{ padding: '10px 15px', borderRadius: '10px' }}
				></OutlinedInput>
			</FormControl>
			<Button
				onClick={() => {
					pushValue();
				}}
				sx={{
					maxHeight: '50px',
					padding: '10px 0px',
					backgroundColor: 'primary.main',
					borderRadius: '10px',
				}}
			>
				<IoIosSend size={'30px'} color='white' />
			</Button>
		</Grid>
	);
}

function SidePanel() {
	return (
		<>
			<Grid item>
				<Card variant='outlined' sx={{ width: '100%', padding: '15px' }}>
					<Grid container sx={{ flexDirection: 'row', gap: '15px' }}>
						<Grid item>
							<Avatar />
						</Grid>
						<Grid item>
							<Grid container sx={{ flexDirection: 'column' }}>
								<Typography fontWeight='600'>Person 1</Typography>
								<Typography>Something something lorem</Typography>
							</Grid>
						</Grid>
					</Grid>
				</Card>
			</Grid>
		</>
	);
}
