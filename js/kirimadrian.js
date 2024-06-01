function sendwa(event) {
    event.preventDefault();

    const namaKegiatan = document.getElementById('namaKegiatan').value;
    const temaKegiatan = document.getElementById('temaKegiatan').value;
    const pjNrp = document.getElementById('pjNrp').value;
    const kpNrp = document.getElementById('kpNrp').value;
    const tujuanKegiatan = document.getElementById('tujuanKegiatan').value;
    const tanggalPublikasi = document.getElementById('tanggalPublikasi').value;
    const contactPerson = document.getElementById('contactPerson').value;
    const dipublikasiDi = document.getElementById('dipublikasiDi').value;
    const jenisDesain = document.getElementById('jenisDesain').value;
    const caption = document.getElementById('caption').value;
    const catatan = document.getElementById('catatan').value;

    const message = `
Anda Berhasil Menghubungi Medfo

*Desain dengan SOP:*

- Nama Kegiatan: ${namaKegiatan}
- Tema Kegiatan: ${temaKegiatan}
- PJ/NRP: ${pjNrp}
- KP/NRP: ${kpNrp}
- Tujuan Kegiatan: ${tujuanKegiatan}
- Tanggal/Waktu Publikasi: ${tanggalPublikasi}
- Contact Person: ${contactPerson}
- Dipublikasi di: ${dipublikasiDi}
- Jenis Desain: ${jenisDesain}
- Caption: ${caption}
- Catatan: ${catatan}

*Status:*

Dalam proses pembuatan

*Terimakasih*
`;

    const urlTowhatsapp = `https://wa.me/6281806067144?text=${encodeURIComponent(message)}`;
    window.open(urlTowhatsapp, "_blank");
}