<?php

namespace App\Http\Controllers;

use App\Models\Product;
use Illuminate\Http\Request;
use Inertia\Inertia;

class ProductController extends Controller
{
    public function index()
    {
        $productos=Product::all();

        return Inertia::render('Dashboard', [
          'productos' => $productos
        ]);
    }

    public function create(){

        return Inertia::render('CreateProduct');
    }

    public function store(Request $request){

      $request->validate([
          'name' => 'required',
          'price' => 'required',
      ]);
      Product::create([
          'name' => $request->name,
          'price' => $request->price
      ]);

      return Inertia::location('/');
    }

}
