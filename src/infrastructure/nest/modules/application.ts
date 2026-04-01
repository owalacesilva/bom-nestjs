import { Module } from '@nestjs/common';
import { HealthController } from '@infra/nest/controllers/health.controller'

@Module({
  imports: [],
  providers: [],
  controllers: [HealthController],
  exports: [],
})
export class ApplicationModule {}