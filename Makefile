set-token:
	sed -i.bak -E 's!YOUR_ROOKOUT_TOKEN!${ROOKOUT_TOKEN}!g' serverless.yml