var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
import { jsx as _jsx } from "react/jsx-runtime";
import { classNames } from 'shared/lib/classNames/classNames';
import { Button, ThemeButton } from 'shared/ui/Button/Button';
import { useTranslation } from 'react-i18next';
export var LangSwitcher = function (_a) {
    var className = _a.className;
    var _b = useTranslation(), t = _b.t, i18n = _b.i18n;
    var toggleLang = function () {
        i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru');
    };
    return (_jsx(Button, __assign({ theme: ThemeButton.CLEAR, className: classNames('', {}, [className]), onClick: toggleLang }, { children: t('Язык') }), void 0));
};
