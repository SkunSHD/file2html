const mimeTypes: {[key: string]: string} = {
    png: 'image/png',
    gif: 'image/gif',
    jpg: 'image/jpg',
    jpeg: 'image/jpeg',
    pjpeg: 'image/pjpeg',
    svg: 'image/svg+xml',
    ico: 'image/x-icon',
    txt: 'text/plain',
    docx: 'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
    fb: 'application/x-fictionbook+xml',
    fb2: 'application/x-fictionbook+xml',
    odt: 'application/vnd.oasis.opendocument.text',
    epub: 'application/epub+zip'
};

export function lookup (filename: string) {
    const name: string = filename.toLowerCase();
    const extension: string = name.split('.').pop();

    return mimeTypes[extension];
}