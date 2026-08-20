# TaskFlow Veri Modeli

## Task

| Alan | Veri tipi | Zorunlu mu? | Yönetim |
|---|---|---|---|
| id | number | Evet | Sistem |
| title | string | Evet | Kullanıcı |
| description | string | Hayır | Kullanıcı |
| status | string | Hayır | Kullanıcı / Sistem |
| priority | string | Hayır | Kullanıcı |
| assignee | string | Hayır | Kullanıcı |
| dueDate | string | Hayır | Kullanıcı |
| createdAt | string | Evet | Sistem |
| updatedAt | string | Evet | Sistem |
| createdBy | string | Evet | Sistem |

## Status değerleri

- TODO
- IN_PROGRESS
- DONE

Varsayılan değer:

- TODO

## Priority değerleri

- LOW
- MEDIUM
- HIGH

## Tarih formatları

dueDate:

YYYY-MM-DD

createdAt ve updatedAt:

ISO 8601 tarih ve saat formatı