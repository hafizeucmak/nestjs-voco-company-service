import { BadRequestException } from '@nestjs/common';

export class AlreadyExistsException extends BadRequestException {
    constructor(objectName: any) {
        super(`${objectName} already exists.`);
    }
}