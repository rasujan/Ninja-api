import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateNinjaDto, weaponT } from './dto/create-ninja.dto';
import { UpdateNinjaDto } from './dto/update-ninja.dto';

@Injectable()
export class NinjasService {
  private ninjas = [
    { id: 1, name: 'Yoshi', weapon: 'katana' },
    { id: 2, name: 'Mario', weapon: 'sword' },
    { id: 3, name: 'Luigi', weapon: 'bow and arrow' },
  ];

  getNinjas(weapon?: weaponT) {
    if (weapon) {
      return this.ninjas.filter((ninja) => ninja.weapon === weapon);
    }
    return this.ninjas;
  }

  getNinja(id: number) {
    const ninja = this.ninjas.find((ninja) => ninja.id === id);

    if (!ninja) {
      throw new NotFoundException('Ninja not found');
    }

    return ninja;
  }

  createNinja(createNinjaDto: CreateNinjaDto) {
    const ninja = {
      ...createNinjaDto,
      id: this.ninjas.length + 1,
    };

    this.ninjas.push(ninja);

    return ninja;
  }

  updateNinja(id: number, updateNinjaDto: UpdateNinjaDto) {
    this.ninjas = this.ninjas.map((ninja) => {
      if (ninja.id === id) {
        return { ...ninja, ...updateNinjaDto };
      }
      return ninja;
    });

    return this.getNinja(id);
  }

  removeNinja(id: number) {
    const ninja = this.ninjas.find((ninja) => ninja.id === id);

    if (!ninja) {
      throw new Error('Ninja not found');
    } else {
      this.ninjas = this.ninjas.filter((ninja) => ninja.id !== id);

      return 'Removed';
    }
  }
}
