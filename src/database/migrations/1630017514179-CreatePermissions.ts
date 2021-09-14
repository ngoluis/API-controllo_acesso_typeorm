import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreatePermissions1630017514179 implements MigrationInterface {
    
    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query('CREATE EXTENSION IF NOT EXISTS "uuid-ossp"');

        await queryRunner.createTable(
            new Table({
                name: "permissions",
                columns: [
                    {
                        name: "id",
                        type: 'uuid',
                        isPrimary: true,
                        isNullable: false,
                        generationStrategy: "uuid",
                        isGenerated: true,
                        default:'uuid_generate_v4()' 
                    },
                    {
                        name: "name",
                        type: "varchar",
                    },
                    {
                        name: "description",
                        type: "varchar",
                    },
                    {
                        name: "created_at",
                        type: "timestamp",
                        default: "now()",
                    },
                    {
                        name: "update_at",
                        type: "timestamp",
                        default: "now()",
                    }
                ]
            })
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("permissions");
        await queryRunner.query('DROP EXTENSION "uuid-ossp"');
    }

}
