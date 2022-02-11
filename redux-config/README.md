# Đến với project của tôi bạn cần hiểu cấu trúc đặt thư mục của tôi
# Ở đây tôi quyết định kết hợp react + nextjs để làm 1 page project 


# A.1 index.tsx provider { <persistStore >  <F.C APP /> <persistStore // để đảm bảo Redux state sẽ được lưu vào storage mỗi khi nó thay đổi. /> }
 #   B.1 _start (_start, app, setup) // { "_start" một cái bải rác  nơi chứa đụng hình ảnh, các hàm sài lại, layout & & component nhằm mục đích tái sử dụng,  core chứa đụng các DefaultThemeConfig, ThemeProvider }
 #   B.2 app (_start, app, setup) // { "app" gồm modules, page, routes, App.js  } => modules một mớ hổn độn liên quan đến việc quản lý giao diện nhỏ như auth { CURD, F.C, _morks, Models, Layout  } như cái tên __Page nơi làm nhiệm vụ chia giao diện theo trang để hiểu phải không :>> để hiểu thế nào được. routes chịu trách nhiệm chia routes của trang https. App.js tổ chức giao diện  
 #   B.3 setup (_start, app, setup) // { "setup" nơi mà bạn config những thư đầu tiền của dự án như  redux or axios } 
# h thì điểm lại cấy trúc của nó nhé
src {
    "_start"// < asset, helper, layout, partials> :{ 
        "asset" :{  }//  scss< tổ chức all style >, ts< thao tacs dom, tất cả các hàm sử lý liên quan đến ui <sử lý date> >
        "helper": { }// các hám 
        "layout" : {} // tổ chức giao diện tổng thể header, footer, content,... core, theme DefaultThemeConfig 
        "partials": {}// tổng hợp giao diện và phân cấp theo role người dùng, chứ đụng content ui
    }
    "app":{
        "modules": như tiên gọi sử lý CURD, ui,  table database....
        "pages": tập hợp ui chia thành các trang cho routes hiểu
        "routes" config link htttps
        "App.tsx" tổ chức mấy cái tào lao 
    }
    "setup":{
        "redux" : nơi config đầu tiên config configureStore, createSagaMiddleware, ... RootState
        "axios" : config interface axios
    }
}