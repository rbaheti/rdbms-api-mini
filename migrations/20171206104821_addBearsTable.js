exports.up = function (knex, Promise) {
    // what happens when we run the migrations
    return knex.schema.createTable('bears', function (tbl) {
        tbl.increments('id');
        tbl
        	.integer('zooid')
        	.notNullable()
        	.references('id')
        	.inTable('zoos');
        tbl.string('species', 80).notNullable().unique('species', 'unique_bear_species');
        tbl.string('latinName', 80).notNullable();
        tbl.timestamp('createdAt').defaultTo(knex.fn.now());
    });
};

exports.down = function (knex, Promise) {
    // to rollback or undo the changes
    return knex.schema.dropTableIfExists('bears');
};
