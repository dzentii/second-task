import { Command } from 'commander';
import { generateQRCode } from './qr';

const program = new Command();

program
    .name('qr-cli')
    .description('Генератор QR-кодов для терминала')
    .version('1.0.0');

program
    .command('generate <text>')
    .description('Генерирует QR-код из текста или ссылки')
    .option('-s, --size <number>', 'Размер QR-кода (1-20)', '4')
    .action(async (text, options) => {
        try {
            const size = parseInt(options.size, 10);
            const qr = await generateQRCode(text, size);
            console.log(qr);
        } catch (error) {
            if (error instanceof Error) {
                console.error('Ошибка:', error.message);
            } else {
                console.error('Неизвестная ошибка');
            }
            process.exit(1);
        }
    });

program.parse(process.argv);