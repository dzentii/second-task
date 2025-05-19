import * as QRCode from 'qrcode';

export async function generateQRCode(text: string, size: number = 4): Promise<string> {
    try {
        // Проверка на пустой текст
        if (!text || text.trim().length === 0) {
            throw new Error('Укажите текст или ссылку');
        }

        // Проверка допустимого размера
        if (isNaN(size) || size < 1 || size > 20) {
            throw new Error('Размер должен быть числом между 1 и 20');
        }

        // Проверка на слишком длинный текст
        if (text.length > 100
        ) {
            throw new Error('Текст слишком длинный (максимум 100 символов)');
        }

        const options: QRCode.QRCodeToStringOptions = {
            type: 'terminal',
            scale: size,
            small: true,
            errorCorrectionLevel: 'L'
        };

        return await QRCode.toString(text, options);
    } catch (error) {
        throw error;
    }
}