/** @format */
import QRCode from "qrcode"
import React, { useEffect, useState } from "react"

const QrCodeGenerating = ({ text }) => {
	const [src, setSrc] = useState("")

	useEffect(() => {
		QRCode.toDataURL(text).then((data) => {
			setSrc(data)
		})
	}, [])
	return (
		<>
			<div>
				<img src={src} />
			</div>
		</>
	)
}

export default QrCodeGenerating
