# Proje Dosyalarını Bilgisayara İndirme ve GitHub'a Yükleme

Bu kılavuz, proje kodlarınızı bilgisayarınıza indirip ardından kendi GitHub hesabınıza nasıl yükleyeceğinizi adım adım anlatmaktadır.

## 1. Proje Dosyalarını Bilgisayara İndirme

Bu projenin tüm kodlarını ve dosyalarını bilgisayarınıza bir ZIP arşivi olarak indirmek için lütfen aşağıdaki adımları izleyin:

1.  **İndirme Düğmesini Bulun:** İndirme düğmesi, kod düzenleyicinin veya uygulamanın bir parçası değildir. İçinde çalıştığınız **Firebase Studio arayüzünün üst kısmında** yer alır. Genellikle sağ üst köşede, diğer kontrol düğmelerinin (Paylaş, Ayarlar vb.) yanında bulunur. Düğme üzerinde **"Download Code"**, **"Export as ZIP"** veya benzeri bir metin yazabilir ve genellikle **aşağıyı gösteren bir ok (↓)** simgesine sahiptir.

2.  **Projeyi İndirin:** Bu düğmeye tıkladığınızda, projenin tüm dosyalarını içeren bir `.zip` dosyası bilgisayarınıza indirilmeye başlayacaktır.

3.  **Arşivi Çıkarın:** İndirme işlemi tamamlandıktan sonra, bilgisayarınızdaki `.zip` dosyasına sağ tıklayın ve "Tümünü Çıkart" (Extract All) veya benzeri bir seçeneği seçerek dosyaları bir klasöre çıkarın.

## 2. Projeyi GitHub'a Yükleme

Proje dosyalarını bilgisayarınıza indirdikten sonra, aşağıdaki adımları izleyerek kendi GitHub hesabınıza yükleyebilirsiniz. (Bu adımlar için bilgisayarınızda `git`'in yüklü olması gerekmektedir.)

1.  **Yeni Bir GitHub Reposu Oluşturun:**
    *   [GitHub.com](https://github.com) adresine gidin ve hesabınıza giriş yapın.
    *   Sağ üst köşedeki "+" simgesine tıklayın ve "New repository" seçeneğini seçin.
    *   Reponuza bir isim verin (örneğin, `benim-blog-projem`).
    *   Repoyu "Public" (Herkese Açık) veya "Private" (Özel) olarak ayarlayabilirsiniz.
    *   **ÖNEMLİ:** "Add a README file", "Add .gitignore" veya "Choose a license" seçeneklerinden **hiçbirini işaretlemeyin**. Boş bir repo oluşturmamız gerekiyor.
    *   "Create repository" düğmesine tıklayın.

2.  **Projeyi Komut Satırından GitHub'a Gönderin:**
    *   Bilgisayarınızda bir terminal (Komut İstemi, PowerShell, veya macOS/Linux'ta Terminal) açın.
    *   `cd` komutu ile daha önce ZIP'ten çıkardığınız proje klasörünün içine gidin. Örneğin: `cd C:\Users\KullaniciAdiniz\Downloads\proje-klasoru`
    *   Aşağıdaki komutları sırayla çalıştırın:

    ```bash
    # Proje klasörünü bir Git reposu olarak başlat
    git init

    # Tüm proje dosyalarını Git'e ekle
    git add .

    # Dosyaların ilk versiyonunu kaydet (commit)
    git commit -m "İlk proje versiyonu"

    # Ana dalın adını "main" olarak ayarla
    git branch -M main

    # GitHub'da oluşturduğun repoyu bu projeye uzaktaki (remote) olarak ekle
    # <URL> yazan yeri GitHub'ın sana verdiği repo URL'si ile değiştir
    git remote add origin <URL>

    # Tüm kodları GitHub'daki "main" dalına gönder
    git push -u origin main
    ```

    **Not:** `<URL>` yazan yeri, GitHub'da repo oluşturduktan sonra size gösterilen URL ile değiştirmeyi unutmayın. Genellikle `https://github.com/kullanici-adiniz/repo-adiniz.git` formatında olur.

Bu adımları tamamladıktan sonra, projenizin tüm kodları kendi GitHub hesabınızda olacaktır. Umarım bu talimatlar yardımcı olur!