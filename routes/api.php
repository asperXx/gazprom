<?php
Route::group(['prefix' => 'auth', 'namespace' => 'Auth'], function() {
    Route::post('signin', 'SignInController');
    Route::post('signout', 'SignOutController');
    Route::post('me', 'MeController');
    
    //изменил
});

Route::group(['prefix' => 'auth'], function() {
    Route::post('createProp', 'TicketController@store');
    Route::get('getMyProps/{id}', 'TicketController@index');
    Route::get('deleteProp/{title}', 'TicketController@destroy');
});


Route::group(['prefix' => 'auth'], function() {
    Route::post('createPost', 'BlogController@store');
    Route::get('getMyPosts/{id}', 'BlogController@index');
    Route::get('deletePost/{title}', 'BlogController@destroy');
});
