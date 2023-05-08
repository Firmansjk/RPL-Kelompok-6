<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class packets extends Model
{
    protected $fillable = [
        'product_name',
        'product_desc'
    ];
    
    use HasFactory;
}
