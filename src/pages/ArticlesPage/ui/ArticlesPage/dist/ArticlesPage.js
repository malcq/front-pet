"use strict";
exports.__esModule = true;
var react_1 = require("react");
var classNames_1 = require("shared/lib/classNames/classNames");
var DynamicModuleLoader_1 = require("shared/lib/components/DynamicModuleLoader/DynamicModuleLoader");
var useAppDispatch_1 = require("shared/lib/hooks/useAppDispatch/useAppDispatch");
var Page_1 = require("widgets/Page/Page");
var fetchNextArticlesPage_1 = require("../../model/services/fetchNextArticlesPage/fetchNextArticlesPage");
var articlesPageSlice_1 = require("../../model/slices/articlesPageSlice");
var ArticlesPage_module_scss_1 = require("./ArticlesPage.module.scss");
var ArticlesPageFilters_1 = require("../ArticlesPageFilters/ArticlesPageFilters");
var ArticleInfiniteList_1 = require("../ArticleInfiniteList/ArticleInfiniteList");
var reducers = {
    articlesPage: articlesPageSlice_1.articlesPageReducer
};
var ArticlesPage = function (_a) {
    var className = _a.className;
    var dispatch = useAppDispatch_1.useAppDispatch();
    var onLoadNextPart = react_1.useCallback(function () {
        dispatch(fetchNextArticlesPage_1.fetchNextArticlesPage());
    }, [dispatch]);
    return (React.createElement(DynamicModuleLoader_1.DynamicModuleLoader, { reducers: reducers, removeAfterUnmount: false },
        React.createElement(Page_1.Page, { onScrollEnd: onLoadNextPart, className: classNames_1.classNames(ArticlesPage_module_scss_1["default"].ArticlesPage, {}, [className]) },
            React.createElement(ArticlesPageFilters_1.ArticlesPageFilters, null),
            React.createElement(ArticleInfiniteList_1.ArticleInfiniteList, null))));
};
exports["default"] = react_1.memo(ArticlesPage);
