import { IsEnum, MinLength } from 'class-validator';

const weapons = ['katana', 'sword', 'bow and arrow'];

export type weaponT = (typeof weapons)[number];

export class CreateNinjaDto {
  @MinLength(3)
  name: string;

  @IsEnum(weapons)
  weapon: weaponT;
}
