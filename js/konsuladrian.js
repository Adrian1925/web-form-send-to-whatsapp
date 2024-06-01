function sendwa(event) {
    event.preventDefault();

    const namaKegiatan = document.getElementById('namaKegiatan').value;
    const temaKegiatan = document.getElementById('temaKegiatan').value;
    const tujuanKegiatan = document.getElementById('tujuanKegiatan').value;
    const desain = document.getElementById('desain').value;

    const message = `
*Anda Berhasil Menghubungi Medfo*

KONSULTASI DESAIN :
    
- Nama Kegiatan: ${namaKegiatan}
- Tema Kegiatan: ${temaKegiatan}
- Tujuan Kegiatan: ${tujuanKegiatan}
- ink Desain: ${desain}

*Status:*

Dalam proses

*Terimakasih*
    `;
    const urlTowhatsapp = `https://wa.me/6281806067144?text=${encodeURIComponent(message)}`;
    window.open(urlTowhatsapp, "_blank");
}