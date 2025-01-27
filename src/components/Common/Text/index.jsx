const Text = ({
	text = 'Default Text',
	fontSize = '1rem',
	fontWeight = 'regular',
	fontStyle = 'normal',
	color = 'var(--color-text)',
}) => {
	return (
		<div>
			<p
				style={{
					color: color,
					fontSize: fontSize,
					fontWeight: fontWeight,
					fontStyle: fontStyle,
				}}
			>
				{text}
			</p>
		</div>
	);
};

export default Text;
