# TaskFlow

TaskFlow, React ve Bootstrap 5 kullanılarak geliştirilmiş bir görev yönetim uygulamasıdır.

Kullanıcılar görev oluşturabilir, listeleyebilir, düzenleyebilir ve silebilir. Görevler durum ve öncelik bilgileriyle yönetilebilir; arama, filtreleme ve sıralama özellikleri sayesinde görev takibi kolaylaştırılır.

Veriler LocalStorage üzerinde saklandığı için sayfa yenilendiğinde görevler korunur.

---

## Özellikler

- Görev ekleme
- Görev listeleme
- Görev güncelleme
- Görev silme
- LocalStorage ile veri saklama
- Başlık ve sorumlu kişiye göre arama
- Duruma göre filtreleme
- Önceliğe göre filtreleme
- Görevleri sıralama
- Görev istatistiklerini görüntüleme
- Form doğrulama
- Responsive kullanıcı arayüzü

---

## Kullanılan Teknolojiler

- React
- Vite
- JavaScript
- HTML5
- CSS3
- Bootstrap 5
- Bootstrap Icons
- LocalStorage
- Git
- GitHub

---

## CRUD İşlemleri

Projede temel CRUD işlemleri uygulanmıştır:

- **Create:** Yeni görev ekleme
- **Read:** Görevleri listeleme
- **Update:** Mevcut görevleri düzenleme
- **Delete:** Görevleri silme

---

## Proje Yapısı

```text
TaskFlow/
│
├── docs/
│
├── frontend/
│   ├── public/
│   │
│   ├── src/
│   │   ├── components/
│   │   │   ├── Navbar.jsx
│   │   │   ├── TaskCard.jsx
│   │   │   ├── TaskFilter.jsx
│   │   │   ├── TaskForm.jsx
│   │   │   ├── TaskList.jsx
│   │   │   └── TaskStats.jsx
│   │   │
│   │   ├── pages/
│   │   │   └── HomePage.jsx
│   │   │
│   │   ├── App.jsx
│   │   ├── index.css
│   │   └── main.jsx
│   │
│   └── package.json
│
├── screenshots/
│   └── taskflow-dashboard.png
│
├── .gitignore
└── README.md
```

---

## Kurulum

Projeyi bilgisayarınızda çalıştırmak için repository'yi klonlayın:

```bash
git clone https://github.com/hayatguler/TaskFlow.git
```

Projenin frontend klasörüne geçin:

```bash
cd TaskFlow/frontend
```

Gerekli paketleri yükleyin:

```bash
npm install
```

Geliştirme sunucusunu başlatın:

```bash
npm run dev
```

Terminalde gösterilen yerel adresi tarayıcıda açarak uygulamayı kullanabilirsiniz.

---

## Ekran Görüntüsü

## Ekran Görüntüleri

![TaskFlow Dashboard](./screenshots/taskflow-dashboard1.png)

![TaskFlow Görev Listesi](./screenshots/taskflow-dashboard2.png)

![TaskFlow Görev Kartları](./screenshots/taskflow-dashboard3.png)

---

## Canlı Demo

https://curious-daffodil-7060e4.netlify.app/

---

## Projenin Amacı

Bu proje, Web Geliştirme ve JavaScript eğitimi kapsamında öğrenilen modern frontend geliştirme konularını uygulamak amacıyla geliştirilmiştir.

Proje kapsamında React component yapısı, state yönetimi, props kullanımı, form işlemleri, CRUD işlemleri, LocalStorage, Bootstrap ile responsive tasarım ve Git/GitHub kullanımı uygulanmıştır.

---