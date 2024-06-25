import { MigrationInterface, QueryRunner } from "typeorm";

export class AddHistoryTable1719281402075 implements MigrationInterface {
    name = 'AddHistoryTable1719281402075'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "historic" ("id" SERIAL NOT NULL, "data" json NOT NULL, "results" json NOT NULL, "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "userId" integer, CONSTRAINT "PK_c831c76e5e7115cd5417994d40b" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "historic" ADD CONSTRAINT "FK_faa460f23218c2c7f1b839e80c2" FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "historic" DROP CONSTRAINT "FK_faa460f23218c2c7f1b839e80c2"`);
        await queryRunner.query(`DROP TABLE "historic"`);
    }

}
