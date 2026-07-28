import { useEffect, useState } from "react"

const initialFormData = {
  title: "",
  description: "",
  assignee: "",
  priority: "medium",
  status: "todo",
}

function TaskForm({
  onAddTask,
  onUpdateTask,
  editingTask,
  onCancelEditing,
}) {
  const [formData, setFormData] =
    useState(initialFormData)

  const [errors, setErrors] = useState({})

  useEffect(() => {
    if (editingTask) {
      setFormData({
        title: editingTask.title || "",
        description:
          editingTask.description || "",
        assignee: editingTask.assignee || "",
        priority:
          editingTask.priority || "medium",
        status: editingTask.status || "todo",
      })
    } else {
      setFormData(initialFormData)
    }

    setErrors({})
  }, [editingTask])

  function handleChange(event) {
    const { name, value } = event.target

    setFormData((currentFormData) => ({
      ...currentFormData,
      [name]: value,
    }))

    setErrors((currentErrors) => ({
      ...currentErrors,
      [name]: "",
    }))
  }

  function handleSubmit(event) {
    event.preventDefault()

    const validationErrors = {}

    const trimmedTitle = formData.title.trim()
    const trimmedDescription =
      formData.description.trim()
    const trimmedAssignee =
      formData.assignee.trim()

    if (!trimmedTitle) {
      validationErrors.title =
        "Görev başlığı zorunludur."
    }

    if (!trimmedAssignee) {
      validationErrors.assignee =
        "Sorumlu kişi zorunludur."
    }

    if (
      Object.keys(validationErrors).length > 0
    ) {
      setErrors(validationErrors)
      return
    }

    setErrors({})

    const currentTime = new Date().toISOString()

    if (editingTask) {
      const updatedTask = {
        ...editingTask,
        title: trimmedTitle,
        description: trimmedDescription,
        assignee: trimmedAssignee,
        priority: formData.priority,
        status: formData.status,
        updatedAt: currentTime,
      }

      onUpdateTask(updatedTask)
    } else {
      const newTask = {
        id: crypto.randomUUID(),
        title: trimmedTitle,
        description: trimmedDescription,
        assignee: trimmedAssignee,
        priority: formData.priority,
        status: formData.status,
        createdAt: currentTime,
        updatedAt: currentTime,
      }

      onAddTask(newTask)
    }

    setFormData(initialFormData)
  }

  return (
    <section className="card border-0 shadow-sm rounded-4">
      <div className="card-body p-4">
        <div className="mb-4">
          <span className="text-primary fw-semibold small">
            TASKFLOW
          </span>

          <h1 className="h3 mb-1">
            {editingTask
              ? "Görevi Düzenle"
              : "Yeni Görev"}
          </h1>

          <p className="text-body-secondary mb-0">
            Görev bilgilerini doldurarak çalışma
            planınıza ekleyin.
          </p>
        </div>

        <form onSubmit={handleSubmit} noValidate>
          <div className="mb-3">
            <label
              htmlFor="title"
              className="form-label fw-semibold"
            >
              Görev başlığı
            </label>

            <input
              type="text"
              id="title"
              name="title"
              className={`form-control ${errors.title ? "is-invalid" : ""
                }`}
              value={formData.title}
              onChange={handleChange}
              placeholder="Örneğin: API entegrasyonunu tamamla"
            />

            {errors.title && (
              <div className="invalid-feedback">
                {errors.title}
              </div>
            )}
          </div>

          <div className="mb-3">
            <label
              htmlFor="description"
              className="form-label fw-semibold"
            >
              Açıklama
            </label>

            <textarea
              id="description"
              name="description"
              className="form-control"
              value={formData.description}
              onChange={handleChange}
              placeholder="Software Team için görev detaylarını yazın"
              rows="4"
            />
          </div>

          <div className="mb-3">
            <label
              htmlFor="assignee"
              className="form-label fw-semibold"
            >
              Sorumlu kişi
            </label>

            <input
              type="text"
              id="assignee"
              name="assignee"
              className={`form-control ${errors.assignee
                  ? "is-invalid"
                  : ""
                }`}
              value={formData.assignee}
              onChange={handleChange}
              placeholder="Frontend Team"
            />

            {errors.assignee && (
              <div className="invalid-feedback">
                {errors.assignee}
              </div>
            )}
          </div>

          <div className="row g-3 mb-4">
            <div className="col-sm-6">
              <label
                htmlFor="priority"
                className="form-label fw-semibold"
              >
                Öncelik
              </label>

              <select
                id="priority"
                name="priority"
                className="form-select"
                value={formData.priority}
                onChange={handleChange}
              >
                <option value="low">
                  Düşük
                </option>

                <option value="medium">
                  Orta
                </option>

                <option value="high">
                  Yüksek
                </option>
              </select>
            </div>

            <div className="col-sm-6">
              <label
                htmlFor="status"
                className="form-label fw-semibold"
              >
                Durum
              </label>

              <select
                id="status"
                name="status"
                className="form-select"
                value={formData.status}
                onChange={handleChange}
              >
                <option value="todo">
                  Yapılacak
                </option>

                <option value="in-progress">
                  Devam Ediyor
                </option>

                <option value="completed">
                  Tamamlandı
                </option>
              </select>
            </div>
          </div>

          <div className="d-grid gap-2">
            <button
              type="submit"
              className="btn btn-primary btn-lg"
            >
              {editingTask
                ? "Değişiklikleri Kaydet"
                : "Görev Ekle"}
            </button>

            {editingTask && (
              <button
                type="button"
                className="btn btn-outline-secondary"
                onClick={onCancelEditing}
              >
                Düzenlemeyi İptal Et
              </button>
            )}
          </div>
        </form>
      </div>
    </section>
  )
}

export default TaskForm
