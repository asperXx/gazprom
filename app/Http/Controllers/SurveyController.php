<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class SurveyController extends Controller
{
    public function __invoke(Request $request) {
        dd($request);
    }
}
