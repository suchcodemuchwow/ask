import { IsNotEmpty, IsString, MinLength } from 'class-validator';

export class UpdatePostDto {
  @IsString()
  @IsNotEmpty()
  @MinLength(5)
  body: string;
}
