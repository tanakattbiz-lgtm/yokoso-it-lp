function doGet() {
  return HtmlService
    .createHtmlOutputFromFile('index')
    .setTitle('ようこそようこそ株式会社｜業務効率化・自動化サポート')
    .setXFrameOptionsMode(HtmlService.XFrameOptionsMode.ALLOWALL);
}

function submitContactForm(formData) {
  try {
    const to = 'tanaka.tt.biz@gmail.com';
    const subject = '【LP問い合わせ】業務効率化・自動化サポート';

    const body = `
会社名: ${formData.company || ''}
お名前: ${formData.name || ''}
メールアドレス: ${formData.email || ''}
電話番号: ${formData.phone || ''}
相談したい内容: ${formData.consultation || ''}
現在困っていること: ${formData.problem || ''}
現在使っているもの: ${formatValue_(formData.currentTools)}
希望納期: ${formData.deadline || ''}
無料デモ希望: ${formData.demoRequest || ''}
参考資料: ${formData.reference || ''}
作りたい画面のイメージ: ${formData.screenImage || ''}
利用人数: ${formData.users || ''}
スマホ対応: ${formData.mobileSupport || ''}
その他補足: ${formData.message || ''}
`;

    MailApp.sendEmail(to, subject, body, {
      //cc: 'awagoodhouse2525@gmail.com'
    });

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

function formatValue_(value) {
  if (Array.isArray(value)) {
    return value.join(', ');
  }

  return value || '';
}
