function TaskFilter({
    statusFilter,
    onStatusFilterChange,
    priorityFilter,
    onPriorityFilterChange,
    searchTerm,
    onSearchTermChange,
    sortOption,
    onSortOptionChange,
}) {
    return (
        <section className="card border-0 shadow-sm rounded-4 mb-4">
            <div className="card-body p-4">
                <div className="mb-3">
                    <h2 className="h5 mb-1">
                        Görevleri Filtrele
                    </h2>

                    <p className="text-body-secondary small mb-0">
                        Arama, filtreleme ve sıralama
                        seçeneklerini kullanın.
                    </p>
                </div>

                <div className="row g-3">
                    <div className="col-12">
                        <label
                            htmlFor="searchTerm"
                            className="form-label fw-semibold"
                        >
                            Görev ara
                        </label>

                        <input
                            type="search"
                            id="searchTerm"
                            className="form-control"
                            value={searchTerm}
                            onChange={(event) =>
                                onSearchTermChange(
                                    event.target.value
                                )
                            }
                            placeholder="Başlık veya ekip ara"
                        />
                    </div>

                    <div className="col-sm-6 col-xl-4">
                        <label
                            htmlFor="statusFilter"
                            className="form-label fw-semibold"
                        >
                            Durum
                        </label>

                        <select
                            id="statusFilter"
                            className="form-select"
                            value={statusFilter}
                            onChange={(event) =>
                                onStatusFilterChange(
                                    event.target.value
                                )
                            }
                        >
                            <option value="all">
                                Tüm Durumlar
                            </option>

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

                    <div className="col-sm-6 col-xl-4">
                        <label
                            htmlFor="priorityFilter"
                            className="form-label fw-semibold"
                        >
                            Öncelik
                        </label>

                        <select
                            id="priorityFilter"
                            className="form-select"
                            value={priorityFilter}
                            onChange={(event) =>
                                onPriorityFilterChange(
                                    event.target.value
                                )
                            }
                        >
                            <option value="all">
                                Tüm Öncelikler
                            </option>

                            <option value="high">
                                Yüksek
                            </option>

                            <option value="medium">
                                Orta
                            </option>

                            <option value="low">
                                Düşük
                            </option>
                        </select>
                    </div>

                    <div className="col-sm-12 col-xl-4">
                        <label
                            htmlFor="sortOption"
                            className="form-label fw-semibold"
                        >
                            Sıralama
                        </label>

                        <select
                            id="sortOption"
                            className="form-select"
                            value={sortOption}
                            onChange={(event) =>
                                onSortOptionChange(
                                    event.target.value
                                )
                            }
                        >
                            <option value="newest">
                                En yeni
                            </option>

                            <option value="oldest">
                                En eski
                            </option>

                            <option value="title-asc">
                                Başlık: A-Z
                            </option>

                            <option value="title-desc">
                                Başlık: Z-A
                            </option>

                            <option value="priority">
                                Önceliğe göre
                            </option>
                        </select>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default TaskFilter
