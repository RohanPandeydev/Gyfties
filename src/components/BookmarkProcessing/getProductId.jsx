function extractProductIdFromAmazonUrl(url) {
    const amazonUrl = new URL(url);
    const pathParts = amazonUrl.pathname.split('/');
    const productIdIndex = pathParts.indexOf('dp') + 1;
    if (productIdIndex !== 0 && productIdIndex < pathParts.length) {
        const productId = pathParts[productIdIndex];
        return productId;
    }
    return null;
}

const amazonUrl = 'https://www.amazon.com/Razer-BlackWidow-Mechanical-Gaming-Keyboard/dp/B0BV4BC7LV/ref=sr_1_1_sspa?_encoding=UTF8&content-id=amzn1.sym.12129333-2117-4490-9c17-6d31baf0582a&dib=eyJ2IjoiMSJ9.yn0LBKrl5MYB8Znoxfb--_zunKend32DD09ry7A11ITzGxZVM9fg_8SGKEAEWarAGXbbYjrEgNzmZET8tVw6FLIzZcw1-w8wztDT6gniH1E9miGojVw8RfkFZVkueyAToMu7c4HF1VDLWTGm5OBA1gZa-Py2fEqR4ZSQa13enGyXntnIO5vK_5yMbenze1pwQaTgQ-cDkw9Xw0Edcp6qAHGBYOdeMi76t_g5tATFulI.bIjlPez1X7e2TwIWez1CkumKcH3QuopcpvMq5SqRavM&dib_tag=se&keywords=gaming%2Bkeyboard&pd_rd_r=7297354a-c438-4353-a2f7-f6fc723cea05&pd_rd_w=RR6AH&pd_rd_wg=dSMY1&pf_rd_p=12129333-2117-4490-9c17-6d31baf0582a&pf_rd_r=3DY3KXAKKSGMNQDNNKA1&qid=1710753586&sr=8-1-spons&sp_csd=d2lkZ2V0TmFtZT1zcF9hdGY&th=1';

// const productId = extractProductIdFromAmazonUrl(amazonUrl);
// console.log(productId); // Output: B0BV4BC7LV

export default extractProductIdFromAmazonUrl;