import { Controller } from '@nestjs/common';
import { v4 as uuidv4 } from 'uuid';

@Controller('common')
export class CommonController {
  generateUUID(): number {
    return uuidv4();
  }
}
