function doGet() {
  return HtmlService
    .createTemplateFromFile('index')
    .evaluate()
    .setTitle('ようこそようこそ株式会社｜業務効率化・自動化サポート')
    .setXFrameOptionsMode(HtmlService.XFrameOptionsMode.ALLOWALL);
}

function include(filename) {
  return HtmlService.createHtmlOutputFromFile(filename).getContent();
}

function submitContactForm(formData) {
  try {
    const to = 'YOUR_EMAIL@example.com';
    const subject = '【LP問い合わせ】業務効率化・自動化サポート';

    const body = `
会社名: ${formData.company || ''}
お名前: ${formData.name || ''}
メールアドレス: ${formData.email || ''}
電話番号: ${formData.phone || ''}
相談したい内容: ${formData.consultation || ''}
現在困っていること: ${formData.problem || ''}
現在使っているもの: ${formData.currentTools || ''}
希望納期: ${formData.deadline || ''}
無料デモ希望: ${formData.demoRequest || ''}
利用人数: ${formData.users || ''}
スマホ対応: ${formData.mobileSupport || ''}
その他補足: ${formData.message || ''}
`;

    MailApp.sendEmail(to, subject, body);

    return {
      success: true,
      message: 'お問い合わせありがとうございます。内容を確認のうえ、折り返しご連絡いたします。'
    };
  } catch (error) {
    return {
      success: false,
      message: '送信中にエラーが発生しました。時間をおいて再度お試しください。'
    };
  }
}
