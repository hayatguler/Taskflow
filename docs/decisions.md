# TaskFlow Teknik Kararları

Bu belge, TaskFlow projesi geliştirilirken verilen önemli
teknik ve ürün kararlarını kaydetmek için kullanılacaktır.

## Karar 001 — Görev durumları

Görevler aşağıdaki durumlardan birine sahip olabilir:

- TODO
- IN_PROGRESS
- DONE

Serbest metin kullanılmayacaktır.

### Neden?

- Veri tutarlılığı sağlar.
- Filtreleme işlemlerini kolaylaştırır.
- Hatalı veya farklı yazılmış durum değerlerini önler.

---

## Karar 002 — Görev öncelikleri

Görevler aşağıdaki önceliklerden birine sahip olabilir:

- LOW
- MEDIUM
- HIGH

Priority alanı zorunlu olmayacaktır.

---

## Karar 003 — Varsayılan görev durumu

Kullanıcı görev oluştururken status seçebilir.

Seçim yapılmazsa görev otomatik olarak TODO durumunda
oluşturulacaktır.

---

## Karar 004 — Veri saklama yaklaşımı

İlk backend sürümünde görevler bellekte bir JavaScript
dizisinde saklanacaktır.

Daha sonra:

1. JSON dosyasına
2. SQL veritabanına

geçilecektir.

Bu yaklaşım sayesinde önce REST API ve CRUD mantığı
öğrenilecektir.

---

## Karar 005 — Görev durum geçişleri

Normal olarak izin verilen geçişler:

- TODO → IN_PROGRESS
- TODO → DONE
- IN_PROGRESS → TODO
- IN_PROGRESS → DONE

DONE durumundaki görevler normal status güncellemesiyle
değiştirilemez.

Tamamlanan bir görev yeniden açılmak istenirse özel bir
"Reopen Task" işlemi kullanılacaktır.

Bu işlem:

- DONE → IN_PROGRESS

geçişini gerçekleştirir.