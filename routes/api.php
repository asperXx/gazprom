<?php
Route::group(['prefix' => 'auth', 'namespace' => 'Auth'], function() {
    Route::post('signin', 'SignInController');
    Route::post('signout', 'SignOutController');
    Route::post('me', 'MeController');
    
    //изменил
});

Route::group(['prefix' => 'auth'], function() {
    Route::post('createProp', 'TicketController@store');
    Route::get('getMyProps', 'TicketController@index');
    Route::get('showProp/{id}', 'TicketController@show');
    Route::get('deleteProp/{title}', 'TicketController@destroy');

    Route::post('postComment', 'TicketController@comment');
    Route::post('postCommentBlog', 'BlogController@comment');

    Route::post('postFeedback', 'FeedBackController@create');
    Route::get('getMyFeedbacks/{id}', 'FeedBackController@getMyFeedbacks');

    Route::post('propLike', 'TicketController@like');
});


Route::group(['prefix' => 'auth'], function() {
    Route::post('createPost', 'BlogController@store');
    Route::put('getMyPosts/{id}', 'BlogController@index');
    Route::get('showPost/{id}', 'BlogController@show');

    Route::put('updatePost/{id}', 'BlogController@update');
    Route::get('deletePost/{title}', 'BlogController@destroy');

    Route::post('like', 'BlogController@like');

    Route::post('storeSurvey', 'SurveyController');

    Route::get('depAll', 'UserController@depAll');
    Route::put('updateUser/{id}', 'UserController@update');

    Route::post('buygood', 'ShopController@buyGood');

    Route::get('getGoods', 'ShopController@index');
    Route::get('getMyGoods/{id}', 'ShopController@getMyGoods');

    Route::post('sendFlame', 'UserController@sendFlame');

    Route::post('poll', 'PollController@poll');

    Route::get('checkStat', 'PollController@index');

    Route::get('chart', 'UserController@chart');

    Route::get('getMedals/{id}', 'UserController@medals');
});