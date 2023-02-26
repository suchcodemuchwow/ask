"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AbstractRepository = void 0;
class AbstractRepository {
    constructor(tablename, ORM) {
        this.ORM = ORM;
        this.table_name = tablename;
    }
    create(data) {
        return this.ORM[this.table_name.toString()].create({ data });
    }
    delete(id) {
        return this.ORM[this.table_name.toString()].delete({ where: id });
    }
    exists(data) {
        return this.ORM[this.table_name.toString()].findFirst({
            where: Object.assign({}, data),
        });
    }
    findAll() {
        this.ORM.post.findMany({ orderBy: { createdAt: 'asc' } });
        return this.ORM[this.table_name.toString()].findMany();
    }
    findOne(id) {
        return this.ORM[this.table_name.toString()].findFirst({
            where: {
                id: id,
            },
        });
    }
    update(data) {
        throw new Error('Method not implemented.');
    }
}
exports.AbstractRepository = AbstractRepository;
//# sourceMappingURL=abstract.repository.js.map