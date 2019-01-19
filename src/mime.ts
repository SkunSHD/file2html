const mimeTypes: {[key: string]: string} = {
    png: 'image/png',
    gif: 'image/gif',
    jpg: 'image/jpg',
    jpeg: 'image/jpeg',
    pjpeg: 'image/pjpeg',
    svg: 'image/svg+xml',
    ico: 'image/x-icon',
    txt: 'text/plain',
    doc: 'application/msword',
    docx: 'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
    fb: 'application/x-fictionbook+xml',
    fb2: 'application/x-fictionbook+xml',
    'fb2.zip': 'application/x-zip-compressed-fb2',
    odt: 'application/vnd.oasis.opendocument.text',
    sxw: 'application/vnd.sun.xml.writer',
    epub: 'application/epub+zip',
    woff: 'application/font-woff',
    woff2: 'application/font-woff2',
    csv: 'text/csv',
    tsv: 'text/tab-separated-values',
    tab: 'text/tab-separated-values',
    djvu: 'image/vnd.djvu',
    djv: 'image/vnd.djvu',
    zip: 'application/zip',
    rtf: 'application/rtf',
    pages: 'application/vnd.apple.pages'
};

export function lookup (filename: string) {
    if (!filename) {
        return undefined;
    }

    const preparedFilename: string = filename.toLowerCase();

    for (const extension in mimeTypes) {
        // istanbul ignore else
        if (mimeTypes.hasOwnProperty(extension)) {
            const {length} = extension;

            if (preparedFilename.slice(-length) === extension) {
                return mimeTypes[extension];
            }
        }
    }
}