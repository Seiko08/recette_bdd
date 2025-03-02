import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { RecetteService } from './recette.service';
import { CreateRecetteDto } from './dto/createRecette.dto';

@Controller('recettes')
export class RecetteController {
    constructor(private recetteService: RecetteService) {}

    @Get()
    getAll() {
        return this.recetteService.find();
    }

    @Get(':id')
    getById(@Param('id') id: string) {
        return this.recetteService.findById(id);
    }

    @Delete(':id')
    delete(@Param('id') id: string) {
        return this.recetteService.delete(id);
    }

    @Post()
    create(@Body() createRecetteDto: CreateRecetteDto) {
        return this.recetteService.create(createRecetteDto);
    }

    @Patch(':id')
    update(@Param('id') id: string, @Body() updateRecetteDto: CreateRecetteDto) {
        return this.recetteService.update(id, updateRecetteDto);
    }
}