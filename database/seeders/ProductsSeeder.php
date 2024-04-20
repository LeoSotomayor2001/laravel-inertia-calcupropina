<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class ProductsSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        DB::table('products')->insert([
            ['id' => 1, 'name' => 'Pizza a la Leña Chica', 'price' => 10],
            ['id' => 2, 'name' => 'Hamburgesa de Pollo', 'price' => 19],
            ['id' => 3, 'name' => 'Hamburgesa de Carne', 'price' => 20],
            ['id' => 4, 'name' => 'Pollo frito con papas', 'price' => 10],
            ['id' => 5, 'name' => 'Jugo de naranja', 'price' => 5],
            ['id' => 6, 'name' => 'Hamburgesa de Pollo con big cola', 'price' => 22],
            ['id' => 7, 'name' => 'Hot dog', 'price' => 2],
            // Agrega más productos según tus necesidades
        ]);
    }
}
