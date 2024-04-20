<?php

use App\Http\Controllers\ProductController;
use Illuminate\Support\Facades\Route;

Route::get('/',[ProductController::class, 'index'])->name('dashboard');
Route::get('/product/create',[ProductController::class, 'create']);
Route::post('/products/create', [ProductController::class, 'store']);

