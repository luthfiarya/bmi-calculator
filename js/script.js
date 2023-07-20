function calculateBMI(event) {
    event.preventDefault();
    // inisialisasi variabel
    const berat = parseFloat(document.getElementById("berat").value);
    const tinggi = parseFloat(document.getElementById("tinggi").value) / 100;

    // jalankan fungsi di bawah jika input sesuai
    if (!isNaN(berat) && !isNaN(tinggi) && berat > 0 && tinggi > 0) { 
        // rumus bmi
        const bmi = berat / (tinggi * tinggi);
        // variabel untuk menyimpan kategori bmi
        const category = determineBMICategory(bmi);
        // menampilkan hasil pemrosesan script js pada div dengan id "result"
        const resultElement = document.getElementById("result");
        document.getElementById("result").style.display = "block";
        // menampilkan hasil BMI dan kategorinya
        resultElement.innerHTML = `<h1>Hasil</h1>
                                <p>${category}</p>
                                <h2>${bmi.toFixed(2)}</h2>`;

        // kategorisasi bmi sesuai dengan tabel di brief
        if (category === "Kekurangan berat badan") {
        resultElement.innerHTML += "<p>Anda memiliki <b>kekurangan</b> berat badan</p>";
        } 
        else if(category === "Normal (ideal)"){
        resultElement.innerHTML += "<p>Anda memiliki berat badan <b>ideal</b> </p>";
        }
        else if(category === "Kelebihan berat badan"){
        resultElement.innerHTML += "<p>Anda memiliki <b>kelebihan</b> berat badan</p>";
        }
        else if(category === "Kegemukan/obesitas"){
        resultElement.innerHTML += "<p>Anda tergolong <b>obesitas</b></p>";
        }
        resultElement.innerHTML += "<button><a>Download Hasil BMI</a></button>";
        resultElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
    } 
    // data tidak valid jika <0 atau tidak memiliki isi
    else {
        alert("Data tidak valid");
    }
}

// merupakan fungsi untuk menggolongkan kategori bmi yang akan mereturn kategori dalam bentuk string
function determineBMICategory(bmi) {
    if (bmi < 18.5) {
        return "Kekurangan berat badan";
    } else if (bmi >= 18.5 && bmi < 24.9) {
        return "Normal (ideal)";
    } else if (bmi >= 25 && bmi <= 29.9) {
        return "Kelebihan berat badan";
    } else if (bmi >= 30){
        return "Kegemukan/obesitas";
    }
}