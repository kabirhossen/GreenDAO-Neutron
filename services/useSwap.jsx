export async function sendTransfer( amount, Recipient, ShowAlert) {
	
	ShowAlert("pending", `Sending ${amount} NTRN to ${Recipient}...`);
	var tronweb = window.tronWeb
	var tx = await tronweb.transactionBuilder.sendTrx(Recipient, (Number(amount) * 1e6).toFixed(5),window?.tronWeb?.defaultAddress?.base58.toString())
	var signedTx = await tronweb.trx.sign(tx)
	var broastTx = await tronweb.trx.sendRawTransaction(signedTx)
	console.log(broastTx)
	ShowAlert("success", `Successfully sent ${amount} NTRN to ${Recipient}! `);

	return {
		transaction: `https://testnet.mintscan.io/neutron-testnet/txs/${broastTx.txid}`
	};
}