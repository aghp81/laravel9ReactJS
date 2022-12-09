<?php

use Illuminate\Support\Facades\Route;
use App\http\Controllers\EmployeesController;





Route::get('/', function () {
    return view('welcome');
});

Auth::routes();

Route::get('/home', [App\Http\Controllers\HomeController::class, 'index'])->name('home');

Auth::routes();

Route::get('/home', [App\Http\Controllers\HomeController::class, 'index'])->name('home');

Route::get('get/employee/list', 
    [EmployeesController::class, 'getEmployeeList'])->name('employee.list');