import { Controller } from '@nestjs/common';
import { Body, Post, Delete, Param, Get } from '@nestjs/common/decorators';
import { ReviewModel } from './review.model';

@Controller('review')
export class ReviewController {
	@Post('create')
	async create(@Body() dto: Omit<ReviewModel, '_id'>) {}

	@Delete(':id')
	async delete(@Param('id') id: string) {}

	@Get('byProduct/:productId')
	async getByProduct(@Param('productId') productId: string) {}
}
