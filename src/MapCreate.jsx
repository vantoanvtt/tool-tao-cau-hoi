import React, {useState, useEffect} from 'react';
import './tilemap-editor'
import './styles.css'




export default function MapCreate() {

  const init = () => {
    const promise = new Promise(resolve => {resolve()})
    promise.then(()=>{
      const data = `  // Example data structure that tiledmap-editor can read and write
      //https://imgur.com/a/SjjsjTm
      const ioJsonData = {^tileSets^:{^0^:{^src^:^https://i.imgur.com/ztwPZOI.png^,^name^:^tileset 0^,^gridWidth^:8,^gridHeight^:133,^tileCount^:1064,^tileData^:{^0-0^:{^x^:0,^y^:0,^tilesetIdx^:0,^tileSymbol^:^Ã^},^1-0^:{^x^:1,^y^:0,^tilesetIdx^:0,^tileSymbol^:^Ä^},^2-0^:{^x^:2,^y^:0,^tilesetIdx^:0,^tileSymbol^:^Å^},^3-0^:{^x^:3,^y^:0,^tilesetIdx^:0,^tileSymbol^:^Æ^},^4-0^:{^x^:4,^y^:0,^tilesetIdx^:0,^tileSymbol^:^Ç^},^5-0^:{^x^:5,^y^:0,^tilesetIdx^:0,^tileSymbol^:^È^},^6-0^:{^x^:6,^y^:0,^tilesetIdx^:0,^tileSymbol^:^É^},^7-0^:{^x^:7,^y^:0,^tilesetIdx^:0,^tileSymbol^:^Ê^},^0-1^:{^x^:0,^y^:1,^tilesetIdx^:0,^tileSymbol^:^Ë^},^1-1^:{^x^:1,^y^:1,^tilesetIdx^:0,^tileSymbol^:^Ì^},^2-1^:{^x^:2,^y^:1,^tilesetIdx^:0,^tileSymbol^:^Í^},^3-1^:{^x^:3,^y^:1,^tilesetIdx^:0,^tileSymbol^:^Î^},^4-1^:{^x^:4,^y^:1,^tilesetIdx^:0,^tileSymbol^:^Ï^},^5-1^:{^x^:5,^y^:1,^tilesetIdx^:0,^tileSymbol^:^Ð^},^6-1^:{^x^:6,^y^:1,^tilesetIdx^:0,^tileSymbol^:^Ñ^},^7-1^:{^x^:7,^y^:1,^tilesetIdx^:0,^tileSymbol^:^Ò^},^0-2^:{^x^:0,^y^:2,^tilesetIdx^:0,^tileSymbol^:^Ó^},^1-2^:{^x^:1,^y^:2,^tilesetIdx^:0,^tileSymbol^:^Ô^},^2-2^:{^x^:2,^y^:2,^tilesetIdx^:0,^tileSymbol^:^Õ^},^3-2^:{^x^:3,^y^:2,^tilesetIdx^:0,^tileSymbol^:^Ö^},^4-2^:{^x^:4,^y^:2,^tilesetIdx^:0,^tileSymbol^:^×^},^5-2^:{^x^:5,^y^:2,^tilesetIdx^:0,^tileSymbol^:^Ø^},^6-2^:{^x^:6,^y^:2,^tilesetIdx^:0,^tileSymbol^:^Ù^},^7-2^:{^x^:7,^y^:2,^tilesetIdx^:0,^tileSymbol^:^Ú^},^0-3^:{^x^:0,^y^:3,^tilesetIdx^:0,^tileSymbol^:^Û^},^1-3^:{^x^:1,^y^:3,^tilesetIdx^:0,^tileSymbol^:^Ü^},^2-3^:{^x^:2,^y^:3,^tilesetIdx^:0,^tileSymbol^:^Ý^},^3-3^:{^x^:3,^y^:3,^tilesetIdx^:0,^tileSymbol^:^Þ^},^4-3^:{^x^:4,^y^:3,^tilesetIdx^:0,^tileSymbol^:^ß^},^5-3^:{^x^:5,^y^:3,^tilesetIdx^:0,^tileSymbol^:^à^},^6-3^:{^x^:6,^y^:3,^tilesetIdx^:0,^tileSymbol^:^á^},^7-3^:{^x^:7,^y^:3,^tilesetIdx^:0,^tileSymbol^:^â^},^0-4^:{^x^:0,^y^:4,^tilesetIdx^:0,^tileSymbol^:^ã^},^1-4^:{^x^:1,^y^:4,^tilesetIdx^:0,^tileSymbol^:^ä^},^2-4^:{^x^:2,^y^:4,^tilesetIdx^:0,^tileSymbol^:^å^},^3-4^:{^x^:3,^y^:4,^tilesetIdx^:0,^tileSymbol^:^æ^},^4-4^:{^x^:4,^y^:4,^tilesetIdx^:0,^tileSymbol^:^ç^},^5-4^:{^x^:5,^y^:4,^tilesetIdx^:0,^tileSymbol^:^è^},^6-4^:{^x^:6,^y^:4,^tilesetIdx^:0,^tileSymbol^:^é^},^7-4^:{^x^:7,^y^:4,^tilesetIdx^:0,^tileSymbol^:^ê^},^0-5^:{^x^:0,^y^:5,^tilesetIdx^:0,^tileSymbol^:^ë^},^1-5^:{^x^:1,^y^:5,^tilesetIdx^:0,^tileSymbol^:^ì^},^2-5^:{^x^:2,^y^:5,^tilesetIdx^:0,^tileSymbol^:^í^},^3-5^:{^x^:3,^y^:5,^tilesetIdx^:0,^tileSymbol^:^î^},^4-5^:{^x^:4,^y^:5,^tilesetIdx^:0,^tileSymbol^:^ï^},^5-5^:{^x^:5,^y^:5,^tilesetIdx^:0,^tileSymbol^:^ð^},^6-5^:{^x^:6,^y^:5,^tilesetIdx^:0,^tileSymbol^:^ñ^},^7-5^:{^x^:7,^y^:5,^tilesetIdx^:0,^tileSymbol^:^ò^},^0-6^:{^x^:0,^y^:6,^tilesetIdx^:0,^tileSymbol^:^ó^},^1-6^:{^x^:1,^y^:6,^tilesetIdx^:0,^tileSymbol^:^ô^},^2-6^:{^x^:2,^y^:6,^tilesetIdx^:0,^tileSymbol^:^õ^},^3-6^:{^x^:3,^y^:6,^tilesetIdx^:0,^tileSymbol^:^ö^},^4-6^:{^x^:4,^y^:6,^tilesetIdx^:0,^tileSymbol^:^÷^},^5-6^:{^x^:5,^y^:6,^tilesetIdx^:0,^tileSymbol^:^ø^},^6-6^:{^x^:6,^y^:6,^tilesetIdx^:0,^tileSymbol^:^ù^},^7-6^:{^x^:7,^y^:6,^tilesetIdx^:0,^tileSymbol^:^ú^},^0-7^:{^x^:0,^y^:7,^tilesetIdx^:0,^tileSymbol^:^û^},^1-7^:{^x^:1,^y^:7,^tilesetIdx^:0,^tileSymbol^:^ü^},^2-7^:{^x^:2,^y^:7,^tilesetIdx^:0,^tileSymbol^:^ý^},^3-7^:{^x^:3,^y^:7,^tilesetIdx^:0,^tileSymbol^:^þ^},^4-7^:{^x^:4,^y^:7,^tilesetIdx^:0,^tileSymbol^:^ÿ^},^5-7^:{^x^:5,^y^:7,^tilesetIdx^:0,^tileSymbol^:^Ā^},^6-7^:{^x^:6,^y^:7,^tilesetIdx^:0,^tileSymbol^:^ā^},^7-7^:{^x^:7,^y^:7,^tilesetIdx^:0,^tileSymbol^:^Ă^},^0-8^:{^x^:0,^y^:8,^tilesetIdx^:0,^tileSymbol^:^ă^},^1-8^:{^x^:1,^y^:8,^tilesetIdx^:0,^tileSymbol^:^Ą^},^2-8^:{^x^:2,^y^:8,^tilesetIdx^:0,^tileSymbol^:^ą^},^3-8^:{^x^:3,^y^:8,^tilesetIdx^:0,^tileSymbol^:^Ć^},^4-8^:{^x^:4,^y^:8,^tilesetIdx^:0,^tileSymbol^:^ć^},^5-8^:{^x^:5,^y^:8,^tilesetIdx^:0,^tileSymbol^:^Ĉ^},^6-8^:{^x^:6,^y^:8,^tilesetIdx^:0,^tileSymbol^:^ĉ^},^7-8^:{^x^:7,^y^:8,^tilesetIdx^:0,^tileSymbol^:^Ċ^},^0-9^:{^x^:0,^y^:9,^tilesetIdx^:0,^tileSymbol^:^ċ^},^1-9^:{^x^:1,^y^:9,^tilesetIdx^:0,^tileSymbol^:^Č^},^2-9^:{^x^:2,^y^:9,^tilesetIdx^:0,^tileSymbol^:^č^},^3-9^:{^x^:3,^y^:9,^tilesetIdx^:0,^tileSymbol^:^Ď^},^4-9^:{^x^:4,^y^:9,^tilesetIdx^:0,^tileSymbol^:^ď^},^5-9^:{^x^:5,^y^:9,^tilesetIdx^:0,^tileSymbol^:^Đ^},^6-9^:{^x^:6,^y^:9,^tilesetIdx^:0,^tileSymbol^:^đ^},^7-9^:{^x^:7,^y^:9,^tilesetIdx^:0,^tileSymbol^:^Ē^},^0-10^:{^x^:0,^y^:10,^tilesetIdx^:0,^tileSymbol^:^ē^},^1-10^:{^x^:1,^y^:10,^tilesetIdx^:0,^tileSymbol^:^Ĕ^},^2-10^:{^x^:2,^y^:10,^tilesetIdx^:0,^tileSymbol^:^ĕ^},^3-10^:{^x^:3,^y^:10,^tilesetIdx^:0,^tileSymbol^:^Ė^},^4-10^:{^x^:4,^y^:10,^tilesetIdx^:0,^tileSymbol^:^ė^},^5-10^:{^x^:5,^y^:10,^tilesetIdx^:0,^tileSymbol^:^Ę^},^6-10^:{^x^:6,^y^:10,^tilesetIdx^:0,^tileSymbol^:^ę^},^7-10^:{^x^:7,^y^:10,^tilesetIdx^:0,^tileSymbol^:^Ě^},^0-11^:{^x^:0,^y^:11,^tilesetIdx^:0,^tileSymbol^:^ě^},^1-11^:{^x^:1,^y^:11,^tilesetIdx^:0,^tileSymbol^:^Ĝ^},^2-11^:{^x^:2,^y^:11,^tilesetIdx^:0,^tileSymbol^:^ĝ^},^3-11^:{^x^:3,^y^:11,^tilesetIdx^:0,^tileSymbol^:^Ğ^},^4-11^:{^x^:4,^y^:11,^tilesetIdx^:0,^tileSymbol^:^ğ^},^5-11^:{^x^:5,^y^:11,^tilesetIdx^:0,^tileSymbol^:^Ġ^},^6-11^:{^x^:6,^y^:11,^tilesetIdx^:0,^tileSymbol^:^ġ^},^7-11^:{^x^:7,^y^:11,^tilesetIdx^:0,^tileSymbol^:^Ģ^},^0-12^:{^x^:0,^y^:12,^tilesetIdx^:0,^tileSymbol^:^ģ^},^1-12^:{^x^:1,^y^:12,^tilesetIdx^:0,^tileSymbol^:^Ĥ^},^2-12^:{^x^:2,^y^:12,^tilesetIdx^:0,^tileSymbol^:^ĥ^},^3-12^:{^x^:3,^y^:12,^tilesetIdx^:0,^tileSymbol^:^Ħ^},^4-12^:{^x^:4,^y^:12,^tilesetIdx^:0,^tileSymbol^:^ħ^},^5-12^:{^x^:5,^y^:12,^tilesetIdx^:0,^tileSymbol^:^Ĩ^},^6-12^:{^x^:6,^y^:12,^tilesetIdx^:0,^tileSymbol^:^ĩ^},^7-12^:{^x^:7,^y^:12,^tilesetIdx^:0,^tileSymbol^:^Ī^},^0-13^:{^x^:0,^y^:13,^tilesetIdx^:0,^tileSymbol^:^ī^},^1-13^:{^x^:1,^y^:13,^tilesetIdx^:0,^tileSymbol^:^Ĭ^},^2-13^:{^x^:2,^y^:13,^tilesetIdx^:0,^tileSymbol^:^ĭ^},^3-13^:{^x^:3,^y^:13,^tilesetIdx^:0,^tileSymbol^:^Į^},^4-13^:{^x^:4,^y^:13,^tilesetIdx^:0,^tileSymbol^:^į^},^5-13^:{^x^:5,^y^:13,^tilesetIdx^:0,^tileSymbol^:^İ^},^6-13^:{^x^:6,^y^:13,^tilesetIdx^:0,^tileSymbol^:^ı^},^7-13^:{^x^:7,^y^:13,^tilesetIdx^:0,^tileSymbol^:^Ĳ^},^0-14^:{^x^:0,^y^:14,^tilesetIdx^:0,^tileSymbol^:^ĳ^},^1-14^:{^x^:1,^y^:14,^tilesetIdx^:0,^tileSymbol^:^Ĵ^},^2-14^:{^x^:2,^y^:14,^tilesetIdx^:0,^tileSymbol^:^ĵ^},^3-14^:{^x^:3,^y^:14,^tilesetIdx^:0,^tileSymbol^:^Ķ^},^4-14^:{^x^:4,^y^:14,^tilesetIdx^:0,^tileSymbol^:^ķ^},^5-14^:{^x^:5,^y^:14,^tilesetIdx^:0,^tileSymbol^:^ĸ^},^6-14^:{^x^:6,^y^:14,^tilesetIdx^:0,^tileSymbol^:^Ĺ^},^7-14^:{^x^:7,^y^:14,^tilesetIdx^:0,^tileSymbol^:^ĺ^},^0-15^:{^x^:0,^y^:15,^tilesetIdx^:0,^tileSymbol^:^Ļ^},^1-15^:{^x^:1,^y^:15,^tilesetIdx^:0,^tileSymbol^:^ļ^},^2-15^:{^x^:2,^y^:15,^tilesetIdx^:0,^tileSymbol^:^Ľ^},^3-15^:{^x^:3,^y^:15,^tilesetIdx^:0,^tileSymbol^:^ľ^},^4-15^:{^x^:4,^y^:15,^tilesetIdx^:0,^tileSymbol^:^Ŀ^},^5-15^:{^x^:5,^y^:15,^tilesetIdx^:0,^tileSymbol^:^ŀ^},^6-15^:{^x^:6,^y^:15,^tilesetIdx^:0,^tileSymbol^:^Ł^},^7-15^:{^x^:7,^y^:15,^tilesetIdx^:0,^tileSymbol^:^ł^},^0-16^:{^x^:0,^y^:16,^tilesetIdx^:0,^tileSymbol^:^Ń^},^1-16^:{^x^:1,^y^:16,^tilesetIdx^:0,^tileSymbol^:^ń^},^2-16^:{^x^:2,^y^:16,^tilesetIdx^:0,^tileSymbol^:^Ņ^},^3-16^:{^x^:3,^y^:16,^tilesetIdx^:0,^tileSymbol^:^ņ^},^4-16^:{^x^:4,^y^:16,^tilesetIdx^:0,^tileSymbol^:^Ň^},^5-16^:{^x^:5,^y^:16,^tilesetIdx^:0,^tileSymbol^:^ň^},^6-16^:{^x^:6,^y^:16,^tilesetIdx^:0,^tileSymbol^:^ŉ^},^7-16^:{^x^:7,^y^:16,^tilesetIdx^:0,^tileSymbol^:^Ŋ^},^0-17^:{^x^:0,^y^:17,^tilesetIdx^:0,^tileSymbol^:^ŋ^},^1-17^:{^x^:1,^y^:17,^tilesetIdx^:0,^tileSymbol^:^Ō^},^2-17^:{^x^:2,^y^:17,^tilesetIdx^:0,^tileSymbol^:^ō^},^3-17^:{^x^:3,^y^:17,^tilesetIdx^:0,^tileSymbol^:^Ŏ^},^4-17^:{^x^:4,^y^:17,^tilesetIdx^:0,^tileSymbol^:^ŏ^},^5-17^:{^x^:5,^y^:17,^tilesetIdx^:0,^tileSymbol^:^Ő^},^6-17^:{^x^:6,^y^:17,^tilesetIdx^:0,^tileSymbol^:^ő^},^7-17^:{^x^:7,^y^:17,^tilesetIdx^:0,^tileSymbol^:^Œ^},^0-18^:{^x^:0,^y^:18,^tilesetIdx^:0,^tileSymbol^:^œ^},^1-18^:{^x^:1,^y^:18,^tilesetIdx^:0,^tileSymbol^:^Ŕ^},^2-18^:{^x^:2,^y^:18,^tilesetIdx^:0,^tileSymbol^:^ŕ^},^3-18^:{^x^:3,^y^:18,^tilesetIdx^:0,^tileSymbol^:^Ŗ^},^4-18^:{^x^:4,^y^:18,^tilesetIdx^:0,^tileSymbol^:^ŗ^},^5-18^:{^x^:5,^y^:18,^tilesetIdx^:0,^tileSymbol^:^Ř^},^6-18^:{^x^:6,^y^:18,^tilesetIdx^:0,^tileSymbol^:^ř^},^7-18^:{^x^:7,^y^:18,^tilesetIdx^:0,^tileSymbol^:^Ś^},^0-19^:{^x^:0,^y^:19,^tilesetIdx^:0,^tileSymbol^:^ś^},^1-19^:{^x^:1,^y^:19,^tilesetIdx^:0,^tileSymbol^:^Ŝ^},^2-19^:{^x^:2,^y^:19,^tilesetIdx^:0,^tileSymbol^:^ŝ^},^3-19^:{^x^:3,^y^:19,^tilesetIdx^:0,^tileSymbol^:^Ş^},^4-19^:{^x^:4,^y^:19,^tilesetIdx^:0,^tileSymbol^:^ş^},^5-19^:{^x^:5,^y^:19,^tilesetIdx^:0,^tileSymbol^:^Š^},^6-19^:{^x^:6,^y^:19,^tilesetIdx^:0,^tileSymbol^:^š^},^7-19^:{^x^:7,^y^:19,^tilesetIdx^:0,^tileSymbol^:^Ţ^},^0-20^:{^x^:0,^y^:20,^tilesetIdx^:0,^tileSymbol^:^ţ^},^1-20^:{^x^:1,^y^:20,^tilesetIdx^:0,^tileSymbol^:^Ť^},^2-20^:{^x^:2,^y^:20,^tilesetIdx^:0,^tileSymbol^:^ť^},^3-20^:{^x^:3,^y^:20,^tilesetIdx^:0,^tileSymbol^:^Ŧ^},^4-20^:{^x^:4,^y^:20,^tilesetIdx^:0,^tileSymbol^:^ŧ^},^5-20^:{^x^:5,^y^:20,^tilesetIdx^:0,^tileSymbol^:^Ũ^},^6-20^:{^x^:6,^y^:20,^tilesetIdx^:0,^tileSymbol^:^ũ^},^7-20^:{^x^:7,^y^:20,^tilesetIdx^:0,^tileSymbol^:^Ū^},^0-21^:{^x^:0,^y^:21,^tilesetIdx^:0,^tileSymbol^:^ū^},^1-21^:{^x^:1,^y^:21,^tilesetIdx^:0,^tileSymbol^:^Ŭ^},^2-21^:{^x^:2,^y^:21,^tilesetIdx^:0,^tileSymbol^:^ŭ^},^3-21^:{^x^:3,^y^:21,^tilesetIdx^:0,^tileSymbol^:^Ů^},^4-21^:{^x^:4,^y^:21,^tilesetIdx^:0,^tileSymbol^:^ů^},^5-21^:{^x^:5,^y^:21,^tilesetIdx^:0,^tileSymbol^:^Ű^},^6-21^:{^x^:6,^y^:21,^tilesetIdx^:0,^tileSymbol^:^ű^},^7-21^:{^x^:7,^y^:21,^tilesetIdx^:0,^tileSymbol^:^Ų^},^0-22^:{^x^:0,^y^:22,^tilesetIdx^:0,^tileSymbol^:^ų^},^1-22^:{^x^:1,^y^:22,^tilesetIdx^:0,^tileSymbol^:^Ŵ^},^2-22^:{^x^:2,^y^:22,^tilesetIdx^:0,^tileSymbol^:^ŵ^},^3-22^:{^x^:3,^y^:22,^tilesetIdx^:0,^tileSymbol^:^Ŷ^},^4-22^:{^x^:4,^y^:22,^tilesetIdx^:0,^tileSymbol^:^ŷ^},^5-22^:{^x^:5,^y^:22,^tilesetIdx^:0,^tileSymbol^:^Ÿ^},^6-22^:{^x^:6,^y^:22,^tilesetIdx^:0,^tileSymbol^:^Ź^},^7-22^:{^x^:7,^y^:22,^tilesetIdx^:0,^tileSymbol^:^ź^},^0-23^:{^x^:0,^y^:23,^tilesetIdx^:0,^tileSymbol^:^Ż^},^1-23^:{^x^:1,^y^:23,^tilesetIdx^:0,^tileSymbol^:^ż^},^2-23^:{^x^:2,^y^:23,^tilesetIdx^:0,^tileSymbol^:^Ž^},^3-23^:{^x^:3,^y^:23,^tilesetIdx^:0,^tileSymbol^:^ž^},^4-23^:{^x^:4,^y^:23,^tilesetIdx^:0,^tileSymbol^:^ſ^},^5-23^:{^x^:5,^y^:23,^tilesetIdx^:0,^tileSymbol^:^ƀ^},^6-23^:{^x^:6,^y^:23,^tilesetIdx^:0,^tileSymbol^:^Ɓ^},^7-23^:{^x^:7,^y^:23,^tilesetIdx^:0,^tileSymbol^:^Ƃ^},^0-24^:{^x^:0,^y^:24,^tilesetIdx^:0,^tileSymbol^:^ƃ^},^1-24^:{^x^:1,^y^:24,^tilesetIdx^:0,^tileSymbol^:^Ƅ^},^2-24^:{^x^:2,^y^:24,^tilesetIdx^:0,^tileSymbol^:^ƅ^},^3-24^:{^x^:3,^y^:24,^tilesetIdx^:0,^tileSymbol^:^Ɔ^},^4-24^:{^x^:4,^y^:24,^tilesetIdx^:0,^tileSymbol^:^Ƈ^},^5-24^:{^x^:5,^y^:24,^tilesetIdx^:0,^tileSymbol^:^ƈ^},^6-24^:{^x^:6,^y^:24,^tilesetIdx^:0,^tileSymbol^:^Ɖ^},^7-24^:{^x^:7,^y^:24,^tilesetIdx^:0,^tileSymbol^:^Ɗ^},^0-25^:{^x^:0,^y^:25,^tilesetIdx^:0,^tileSymbol^:^Ƌ^},^1-25^:{^x^:1,^y^:25,^tilesetIdx^:0,^tileSymbol^:^ƌ^},^2-25^:{^x^:2,^y^:25,^tilesetIdx^:0,^tileSymbol^:^ƍ^},^3-25^:{^x^:3,^y^:25,^tilesetIdx^:0,^tileSymbol^:^Ǝ^},^4-25^:{^x^:4,^y^:25,^tilesetIdx^:0,^tileSymbol^:^Ə^},^5-25^:{^x^:5,^y^:25,^tilesetIdx^:0,^tileSymbol^:^Ɛ^},^6-25^:{^x^:6,^y^:25,^tilesetIdx^:0,^tileSymbol^:^Ƒ^},^7-25^:{^x^:7,^y^:25,^tilesetIdx^:0,^tileSymbol^:^ƒ^},^0-26^:{^x^:0,^y^:26,^tilesetIdx^:0,^tileSymbol^:^Ɠ^},^1-26^:{^x^:1,^y^:26,^tilesetIdx^:0,^tileSymbol^:^Ɣ^},^2-26^:{^x^:2,^y^:26,^tilesetIdx^:0,^tileSymbol^:^ƕ^},^3-26^:{^x^:3,^y^:26,^tilesetIdx^:0,^tileSymbol^:^Ɩ^},^4-26^:{^x^:4,^y^:26,^tilesetIdx^:0,^tileSymbol^:^Ɨ^},^5-26^:{^x^:5,^y^:26,^tilesetIdx^:0,^tileSymbol^:^Ƙ^},^6-26^:{^x^:6,^y^:26,^tilesetIdx^:0,^tileSymbol^:^ƙ^},^7-26^:{^x^:7,^y^:26,^tilesetIdx^:0,^tileSymbol^:^ƚ^},^0-27^:{^x^:0,^y^:27,^tilesetIdx^:0,^tileSymbol^:^ƛ^},^1-27^:{^x^:1,^y^:27,^tilesetIdx^:0,^tileSymbol^:^Ɯ^},^2-27^:{^x^:2,^y^:27,^tilesetIdx^:0,^tileSymbol^:^Ɲ^},^3-27^:{^x^:3,^y^:27,^tilesetIdx^:0,^tileSymbol^:^ƞ^},^4-27^:{^x^:4,^y^:27,^tilesetIdx^:0,^tileSymbol^:^Ɵ^},^5-27^:{^x^:5,^y^:27,^tilesetIdx^:0,^tileSymbol^:^Ơ^},^6-27^:{^x^:6,^y^:27,^tilesetIdx^:0,^tileSymbol^:^ơ^},^7-27^:{^x^:7,^y^:27,^tilesetIdx^:0,^tileSymbol^:^Ƣ^},^0-28^:{^x^:0,^y^:28,^tilesetIdx^:0,^tileSymbol^:^ƣ^},^1-28^:{^x^:1,^y^:28,^tilesetIdx^:0,^tileSymbol^:^Ƥ^},^2-28^:{^x^:2,^y^:28,^tilesetIdx^:0,^tileSymbol^:^ƥ^},^3-28^:{^x^:3,^y^:28,^tilesetIdx^:0,^tileSymbol^:^Ʀ^},^4-28^:{^x^:4,^y^:28,^tilesetIdx^:0,^tileSymbol^:^Ƨ^},^5-28^:{^x^:5,^y^:28,^tilesetIdx^:0,^tileSymbol^:^ƨ^},^6-28^:{^x^:6,^y^:28,^tilesetIdx^:0,^tileSymbol^:^Ʃ^},^7-28^:{^x^:7,^y^:28,^tilesetIdx^:0,^tileSymbol^:^ƪ^},^0-29^:{^x^:0,^y^:29,^tilesetIdx^:0,^tileSymbol^:^ƫ^},^1-29^:{^x^:1,^y^:29,^tilesetIdx^:0,^tileSymbol^:^Ƭ^},^2-29^:{^x^:2,^y^:29,^tilesetIdx^:0,^tileSymbol^:^ƭ^},^3-29^:{^x^:3,^y^:29,^tilesetIdx^:0,^tileSymbol^:^Ʈ^},^4-29^:{^x^:4,^y^:29,^tilesetIdx^:0,^tileSymbol^:^Ư^},^5-29^:{^x^:5,^y^:29,^tilesetIdx^:0,^tileSymbol^:^ư^},^6-29^:{^x^:6,^y^:29,^tilesetIdx^:0,^tileSymbol^:^Ʊ^},^7-29^:{^x^:7,^y^:29,^tilesetIdx^:0,^tileSymbol^:^Ʋ^},^0-30^:{^x^:0,^y^:30,^tilesetIdx^:0,^tileSymbol^:^Ƴ^},^1-30^:{^x^:1,^y^:30,^tilesetIdx^:0,^tileSymbol^:^ƴ^},^2-30^:{^x^:2,^y^:30,^tilesetIdx^:0,^tileSymbol^:^Ƶ^},^3-30^:{^x^:3,^y^:30,^tilesetIdx^:0,^tileSymbol^:^ƶ^},^4-30^:{^x^:4,^y^:30,^tilesetIdx^:0,^tileSymbol^:^Ʒ^},^5-30^:{^x^:5,^y^:30,^tilesetIdx^:0,^tileSymbol^:^Ƹ^},^6-30^:{^x^:6,^y^:30,^tilesetIdx^:0,^tileSymbol^:^ƹ^},^7-30^:{^x^:7,^y^:30,^tilesetIdx^:0,^tileSymbol^:^ƺ^},^0-31^:{^x^:0,^y^:31,^tilesetIdx^:0,^tileSymbol^:^ƻ^},^1-31^:{^x^:1,^y^:31,^tilesetIdx^:0,^tileSymbol^:^Ƽ^},^2-31^:{^x^:2,^y^:31,^tilesetIdx^:0,^tileSymbol^:^ƽ^},^3-31^:{^x^:3,^y^:31,^tilesetIdx^:0,^tileSymbol^:^ƾ^},^4-31^:{^x^:4,^y^:31,^tilesetIdx^:0,^tileSymbol^:^ƿ^},^5-31^:{^x^:5,^y^:31,^tilesetIdx^:0,^tileSymbol^:^ǀ^},^6-31^:{^x^:6,^y^:31,^tilesetIdx^:0,^tileSymbol^:^ǁ^},^7-31^:{^x^:7,^y^:31,^tilesetIdx^:0,^tileSymbol^:^ǂ^},^0-32^:{^x^:0,^y^:32,^tilesetIdx^:0,^tileSymbol^:^ǃ^},^1-32^:{^x^:1,^y^:32,^tilesetIdx^:0,^tileSymbol^:^Ǆ^},^2-32^:{^x^:2,^y^:32,^tilesetIdx^:0,^tileSymbol^:^ǅ^},^3-32^:{^x^:3,^y^:32,^tilesetIdx^:0,^tileSymbol^:^ǆ^},^4-32^:{^x^:4,^y^:32,^tilesetIdx^:0,^tileSymbol^:^Ǉ^},^5-32^:{^x^:5,^y^:32,^tilesetIdx^:0,^tileSymbol^:^ǈ^},^6-32^:{^x^:6,^y^:32,^tilesetIdx^:0,^tileSymbol^:^ǉ^},^7-32^:{^x^:7,^y^:32,^tilesetIdx^:0,^tileSymbol^:^Ǌ^},^0-33^:{^x^:0,^y^:33,^tilesetIdx^:0,^tileSymbol^:^ǋ^},^1-33^:{^x^:1,^y^:33,^tilesetIdx^:0,^tileSymbol^:^ǌ^},^2-33^:{^x^:2,^y^:33,^tilesetIdx^:0,^tileSymbol^:^Ǎ^},^3-33^:{^x^:3,^y^:33,^tilesetIdx^:0,^tileSymbol^:^ǎ^},^4-33^:{^x^:4,^y^:33,^tilesetIdx^:0,^tileSymbol^:^Ǐ^},^5-33^:{^x^:5,^y^:33,^tilesetIdx^:0,^tileSymbol^:^ǐ^},^6-33^:{^x^:6,^y^:33,^tilesetIdx^:0,^tileSymbol^:^Ǒ^},^7-33^:{^x^:7,^y^:33,^tilesetIdx^:0,^tileSymbol^:^ǒ^},^0-34^:{^x^:0,^y^:34,^tilesetIdx^:0,^tileSymbol^:^Ǔ^},^1-34^:{^x^:1,^y^:34,^tilesetIdx^:0,^tileSymbol^:^ǔ^},^2-34^:{^x^:2,^y^:34,^tilesetIdx^:0,^tileSymbol^:^Ǖ^},^3-34^:{^x^:3,^y^:34,^tilesetIdx^:0,^tileSymbol^:^ǖ^},^4-34^:{^x^:4,^y^:34,^tilesetIdx^:0,^tileSymbol^:^Ǘ^},^5-34^:{^x^:5,^y^:34,^tilesetIdx^:0,^tileSymbol^:^ǘ^},^6-34^:{^x^:6,^y^:34,^tilesetIdx^:0,^tileSymbol^:^Ǚ^},^7-34^:{^x^:7,^y^:34,^tilesetIdx^:0,^tileSymbol^:^ǚ^},^0-35^:{^x^:0,^y^:35,^tilesetIdx^:0,^tileSymbol^:^Ǜ^},^1-35^:{^x^:1,^y^:35,^tilesetIdx^:0,^tileSymbol^:^ǜ^},^2-35^:{^x^:2,^y^:35,^tilesetIdx^:0,^tileSymbol^:^ǝ^},^3-35^:{^x^:3,^y^:35,^tilesetIdx^:0,^tileSymbol^:^Ǟ^},^4-35^:{^x^:4,^y^:35,^tilesetIdx^:0,^tileSymbol^:^ǟ^},^5-35^:{^x^:5,^y^:35,^tilesetIdx^:0,^tileSymbol^:^Ǡ^},^6-35^:{^x^:6,^y^:35,^tilesetIdx^:0,^tileSymbol^:^ǡ^},^7-35^:{^x^:7,^y^:35,^tilesetIdx^:0,^tileSymbol^:^Ǣ^},^0-36^:{^x^:0,^y^:36,^tilesetIdx^:0,^tileSymbol^:^ǣ^},^1-36^:{^x^:1,^y^:36,^tilesetIdx^:0,^tileSymbol^:^Ǥ^},^2-36^:{^x^:2,^y^:36,^tilesetIdx^:0,^tileSymbol^:^ǥ^},^3-36^:{^x^:3,^y^:36,^tilesetIdx^:0,^tileSymbol^:^Ǧ^},^4-36^:{^x^:4,^y^:36,^tilesetIdx^:0,^tileSymbol^:^ǧ^},^5-36^:{^x^:5,^y^:36,^tilesetIdx^:0,^tileSymbol^:^Ǩ^},^6-36^:{^x^:6,^y^:36,^tilesetIdx^:0,^tileSymbol^:^ǩ^},^7-36^:{^x^:7,^y^:36,^tilesetIdx^:0,^tileSymbol^:^Ǫ^},^0-37^:{^x^:0,^y^:37,^tilesetIdx^:0,^tileSymbol^:^ǫ^},^1-37^:{^x^:1,^y^:37,^tilesetIdx^:0,^tileSymbol^:^Ǭ^},^2-37^:{^x^:2,^y^:37,^tilesetIdx^:0,^tileSymbol^:^ǭ^},^3-37^:{^x^:3,^y^:37,^tilesetIdx^:0,^tileSymbol^:^Ǯ^},^4-37^:{^x^:4,^y^:37,^tilesetIdx^:0,^tileSymbol^:^ǯ^},^5-37^:{^x^:5,^y^:37,^tilesetIdx^:0,^tileSymbol^:^ǰ^},^6-37^:{^x^:6,^y^:37,^tilesetIdx^:0,^tileSymbol^:^Ǳ^},^7-37^:{^x^:7,^y^:37,^tilesetIdx^:0,^tileSymbol^:^ǲ^},^0-38^:{^x^:0,^y^:38,^tilesetIdx^:0,^tileSymbol^:^ǳ^},^1-38^:{^x^:1,^y^:38,^tilesetIdx^:0,^tileSymbol^:^Ǵ^},^2-38^:{^x^:2,^y^:38,^tilesetIdx^:0,^tileSymbol^:^ǵ^},^3-38^:{^x^:3,^y^:38,^tilesetIdx^:0,^tileSymbol^:^Ƕ^},^4-38^:{^x^:4,^y^:38,^tilesetIdx^:0,^tileSymbol^:^Ƿ^},^5-38^:{^x^:5,^y^:38,^tilesetIdx^:0,^tileSymbol^:^Ǹ^},^6-38^:{^x^:6,^y^:38,^tilesetIdx^:0,^tileSymbol^:^ǹ^},^7-38^:{^x^:7,^y^:38,^tilesetIdx^:0,^tileSymbol^:^Ǻ^},^0-39^:{^x^:0,^y^:39,^tilesetIdx^:0,^tileSymbol^:^ǻ^},^1-39^:{^x^:1,^y^:39,^tilesetIdx^:0,^tileSymbol^:^Ǽ^},^2-39^:{^x^:2,^y^:39,^tilesetIdx^:0,^tileSymbol^:^ǽ^},^3-39^:{^x^:3,^y^:39,^tilesetIdx^:0,^tileSymbol^:^Ǿ^},^4-39^:{^x^:4,^y^:39,^tilesetIdx^:0,^tileSymbol^:^ǿ^},^5-39^:{^x^:5,^y^:39,^tilesetIdx^:0,^tileSymbol^:^Ȁ^},^6-39^:{^x^:6,^y^:39,^tilesetIdx^:0,^tileSymbol^:^ȁ^},^7-39^:{^x^:7,^y^:39,^tilesetIdx^:0,^tileSymbol^:^Ȃ^},^0-40^:{^x^:0,^y^:40,^tilesetIdx^:0,^tileSymbol^:^ȃ^},^1-40^:{^x^:1,^y^:40,^tilesetIdx^:0,^tileSymbol^:^Ȅ^},^2-40^:{^x^:2,^y^:40,^tilesetIdx^:0,^tileSymbol^:^ȅ^},^3-40^:{^x^:3,^y^:40,^tilesetIdx^:0,^tileSymbol^:^Ȇ^},^4-40^:{^x^:4,^y^:40,^tilesetIdx^:0,^tileSymbol^:^ȇ^},^5-40^:{^x^:5,^y^:40,^tilesetIdx^:0,^tileSymbol^:^Ȉ^},^6-40^:{^x^:6,^y^:40,^tilesetIdx^:0,^tileSymbol^:^ȉ^},^7-40^:{^x^:7,^y^:40,^tilesetIdx^:0,^tileSymbol^:^Ȋ^},^0-41^:{^x^:0,^y^:41,^tilesetIdx^:0,^tileSymbol^:^ȋ^},^1-41^:{^x^:1,^y^:41,^tilesetIdx^:0,^tileSymbol^:^Ȍ^},^2-41^:{^x^:2,^y^:41,^tilesetIdx^:0,^tileSymbol^:^ȍ^},^3-41^:{^x^:3,^y^:41,^tilesetIdx^:0,^tileSymbol^:^Ȏ^},^4-41^:{^x^:4,^y^:41,^tilesetIdx^:0,^tileSymbol^:^ȏ^},^5-41^:{^x^:5,^y^:41,^tilesetIdx^:0,^tileSymbol^:^Ȑ^},^6-41^:{^x^:6,^y^:41,^tilesetIdx^:0,^tileSymbol^:^ȑ^},^7-41^:{^x^:7,^y^:41,^tilesetIdx^:0,^tileSymbol^:^Ȓ^},^0-42^:{^x^:0,^y^:42,^tilesetIdx^:0,^tileSymbol^:^ȓ^},^1-42^:{^x^:1,^y^:42,^tilesetIdx^:0,^tileSymbol^:^Ȕ^},^2-42^:{^x^:2,^y^:42,^tilesetIdx^:0,^tileSymbol^:^ȕ^},^3-42^:{^x^:3,^y^:42,^tilesetIdx^:0,^tileSymbol^:^Ȗ^},^4-42^:{^x^:4,^y^:42,^tilesetIdx^:0,^tileSymbol^:^ȗ^},^5-42^:{^x^:5,^y^:42,^tilesetIdx^:0,^tileSymbol^:^Ș^},^6-42^:{^x^:6,^y^:42,^tilesetIdx^:0,^tileSymbol^:^ș^},^7-42^:{^x^:7,^y^:42,^tilesetIdx^:0,^tileSymbol^:^Ț^},^0-43^:{^x^:0,^y^:43,^tilesetIdx^:0,^tileSymbol^:^ț^},^1-43^:{^x^:1,^y^:43,^tilesetIdx^:0,^tileSymbol^:^Ȝ^},^2-43^:{^x^:2,^y^:43,^tilesetIdx^:0,^tileSymbol^:^ȝ^},^3-43^:{^x^:3,^y^:43,^tilesetIdx^:0,^tileSymbol^:^Ȟ^},^4-43^:{^x^:4,^y^:43,^tilesetIdx^:0,^tileSymbol^:^ȟ^},^5-43^:{^x^:5,^y^:43,^tilesetIdx^:0,^tileSymbol^:^Ƞ^},^6-43^:{^x^:6,^y^:43,^tilesetIdx^:0,^tileSymbol^:^ȡ^},^7-43^:{^x^:7,^y^:43,^tilesetIdx^:0,^tileSymbol^:^Ȣ^},^0-44^:{^x^:0,^y^:44,^tilesetIdx^:0,^tileSymbol^:^ȣ^},^1-44^:{^x^:1,^y^:44,^tilesetIdx^:0,^tileSymbol^:^Ȥ^},^2-44^:{^x^:2,^y^:44,^tilesetIdx^:0,^tileSymbol^:^ȥ^},^3-44^:{^x^:3,^y^:44,^tilesetIdx^:0,^tileSymbol^:^Ȧ^},^4-44^:{^x^:4,^y^:44,^tilesetIdx^:0,^tileSymbol^:^ȧ^},^5-44^:{^x^:5,^y^:44,^tilesetIdx^:0,^tileSymbol^:^Ȩ^},^6-44^:{^x^:6,^y^:44,^tilesetIdx^:0,^tileSymbol^:^ȩ^},^7-44^:{^x^:7,^y^:44,^tilesetIdx^:0,^tileSymbol^:^Ȫ^},^0-45^:{^x^:0,^y^:45,^tilesetIdx^:0,^tileSymbol^:^ȫ^},^1-45^:{^x^:1,^y^:45,^tilesetIdx^:0,^tileSymbol^:^Ȭ^},^2-45^:{^x^:2,^y^:45,^tilesetIdx^:0,^tileSymbol^:^ȭ^},^3-45^:{^x^:3,^y^:45,^tilesetIdx^:0,^tileSymbol^:^Ȯ^},^4-45^:{^x^:4,^y^:45,^tilesetIdx^:0,^tileSymbol^:^ȯ^},^5-45^:{^x^:5,^y^:45,^tilesetIdx^:0,^tileSymbol^:^Ȱ^},^6-45^:{^x^:6,^y^:45,^tilesetIdx^:0,^tileSymbol^:^ȱ^},^7-45^:{^x^:7,^y^:45,^tilesetIdx^:0,^tileSymbol^:^Ȳ^},^0-46^:{^x^:0,^y^:46,^tilesetIdx^:0,^tileSymbol^:^ȳ^},^1-46^:{^x^:1,^y^:46,^tilesetIdx^:0,^tileSymbol^:^ȴ^},^2-46^:{^x^:2,^y^:46,^tilesetIdx^:0,^tileSymbol^:^ȵ^},^3-46^:{^x^:3,^y^:46,^tilesetIdx^:0,^tileSymbol^:^ȶ^},^4-46^:{^x^:4,^y^:46,^tilesetIdx^:0,^tileSymbol^:^ȷ^},^5-46^:{^x^:5,^y^:46,^tilesetIdx^:0,^tileSymbol^:^ȸ^},^6-46^:{^x^:6,^y^:46,^tilesetIdx^:0,^tileSymbol^:^ȹ^},^7-46^:{^x^:7,^y^:46,^tilesetIdx^:0,^tileSymbol^:^Ⱥ^},^0-47^:{^x^:0,^y^:47,^tilesetIdx^:0,^tileSymbol^:^Ȼ^},^1-47^:{^x^:1,^y^:47,^tilesetIdx^:0,^tileSymbol^:^ȼ^},^2-47^:{^x^:2,^y^:47,^tilesetIdx^:0,^tileSymbol^:^Ƚ^},^3-47^:{^x^:3,^y^:47,^tilesetIdx^:0,^tileSymbol^:^Ⱦ^},^4-47^:{^x^:4,^y^:47,^tilesetIdx^:0,^tileSymbol^:^ȿ^},^5-47^:{^x^:5,^y^:47,^tilesetIdx^:0,^tileSymbol^:^ɀ^},^6-47^:{^x^:6,^y^:47,^tilesetIdx^:0,^tileSymbol^:^Ɂ^},^7-47^:{^x^:7,^y^:47,^tilesetIdx^:0,^tileSymbol^:^ɂ^},^0-48^:{^x^:0,^y^:48,^tilesetIdx^:0,^tileSymbol^:^Ƀ^},^1-48^:{^x^:1,^y^:48,^tilesetIdx^:0,^tileSymbol^:^Ʉ^},^2-48^:{^x^:2,^y^:48,^tilesetIdx^:0,^tileSymbol^:^Ʌ^},^3-48^:{^x^:3,^y^:48,^tilesetIdx^:0,^tileSymbol^:^Ɇ^},^4-48^:{^x^:4,^y^:48,^tilesetIdx^:0,^tileSymbol^:^ɇ^},^5-48^:{^x^:5,^y^:48,^tilesetIdx^:0,^tileSymbol^:^Ɉ^},^6-48^:{^x^:6,^y^:48,^tilesetIdx^:0,^tileSymbol^:^ɉ^},^7-48^:{^x^:7,^y^:48,^tilesetIdx^:0,^tileSymbol^:^Ɋ^},^0-49^:{^x^:0,^y^:49,^tilesetIdx^:0,^tileSymbol^:^ɋ^},^1-49^:{^x^:1,^y^:49,^tilesetIdx^:0,^tileSymbol^:^Ɍ^},^2-49^:{^x^:2,^y^:49,^tilesetIdx^:0,^tileSymbol^:^ɍ^},^3-49^:{^x^:3,^y^:49,^tilesetIdx^:0,^tileSymbol^:^Ɏ^},^4-49^:{^x^:4,^y^:49,^tilesetIdx^:0,^tileSymbol^:^ɏ^},^5-49^:{^x^:5,^y^:49,^tilesetIdx^:0,^tileSymbol^:^ɐ^},^6-49^:{^x^:6,^y^:49,^tilesetIdx^:0,^tileSymbol^:^ɑ^},^7-49^:{^x^:7,^y^:49,^tilesetIdx^:0,^tileSymbol^:^ɒ^},^0-50^:{^x^:0,^y^:50,^tilesetIdx^:0,^tileSymbol^:^ɓ^},^1-50^:{^x^:1,^y^:50,^tilesetIdx^:0,^tileSymbol^:^ɔ^},^2-50^:{^x^:2,^y^:50,^tilesetIdx^:0,^tileSymbol^:^ɕ^},^3-50^:{^x^:3,^y^:50,^tilesetIdx^:0,^tileSymbol^:^ɖ^},^4-50^:{^x^:4,^y^:50,^tilesetIdx^:0,^tileSymbol^:^ɗ^},^5-50^:{^x^:5,^y^:50,^tilesetIdx^:0,^tileSymbol^:^ɘ^},^6-50^:{^x^:6,^y^:50,^tilesetIdx^:0,^tileSymbol^:^ə^},^7-50^:{^x^:7,^y^:50,^tilesetIdx^:0,^tileSymbol^:^ɚ^},^0-51^:{^x^:0,^y^:51,^tilesetIdx^:0,^tileSymbol^:^ɛ^},^1-51^:{^x^:1,^y^:51,^tilesetIdx^:0,^tileSymbol^:^ɜ^},^2-51^:{^x^:2,^y^:51,^tilesetIdx^:0,^tileSymbol^:^ɝ^},^3-51^:{^x^:3,^y^:51,^tilesetIdx^:0,^tileSymbol^:^ɞ^},^4-51^:{^x^:4,^y^:51,^tilesetIdx^:0,^tileSymbol^:^ɟ^},^5-51^:{^x^:5,^y^:51,^tilesetIdx^:0,^tileSymbol^:^ɠ^},^6-51^:{^x^:6,^y^:51,^tilesetIdx^:0,^tileSymbol^:^ɡ^},^7-51^:{^x^:7,^y^:51,^tilesetIdx^:0,^tileSymbol^:^ɢ^},^0-52^:{^x^:0,^y^:52,^tilesetIdx^:0,^tileSymbol^:^ɣ^},^1-52^:{^x^:1,^y^:52,^tilesetIdx^:0,^tileSymbol^:^ɤ^},^2-52^:{^x^:2,^y^:52,^tilesetIdx^:0,^tileSymbol^:^ɥ^},^3-52^:{^x^:3,^y^:52,^tilesetIdx^:0,^tileSymbol^:^ɦ^},^4-52^:{^x^:4,^y^:52,^tilesetIdx^:0,^tileSymbol^:^ɧ^},^5-52^:{^x^:5,^y^:52,^tilesetIdx^:0,^tileSymbol^:^ɨ^},^6-52^:{^x^:6,^y^:52,^tilesetIdx^:0,^tileSymbol^:^ɩ^},^7-52^:{^x^:7,^y^:52,^tilesetIdx^:0,^tileSymbol^:^ɪ^},^0-53^:{^x^:0,^y^:53,^tilesetIdx^:0,^tileSymbol^:^ɫ^},^1-53^:{^x^:1,^y^:53,^tilesetIdx^:0,^tileSymbol^:^ɬ^},^2-53^:{^x^:2,^y^:53,^tilesetIdx^:0,^tileSymbol^:^ɭ^},^3-53^:{^x^:3,^y^:53,^tilesetIdx^:0,^tileSymbol^:^ɮ^},^4-53^:{^x^:4,^y^:53,^tilesetIdx^:0,^tileSymbol^:^ɯ^},^5-53^:{^x^:5,^y^:53,^tilesetIdx^:0,^tileSymbol^:^ɰ^},^6-53^:{^x^:6,^y^:53,^tilesetIdx^:0,^tileSymbol^:^ɱ^},^7-53^:{^x^:7,^y^:53,^tilesetIdx^:0,^tileSymbol^:^ɲ^},^0-54^:{^x^:0,^y^:54,^tilesetIdx^:0,^tileSymbol^:^ɳ^},^1-54^:{^x^:1,^y^:54,^tilesetIdx^:0,^tileSymbol^:^ɴ^},^2-54^:{^x^:2,^y^:54,^tilesetIdx^:0,^tileSymbol^:^ɵ^},^3-54^:{^x^:3,^y^:54,^tilesetIdx^:0,^tileSymbol^:^ɶ^},^4-54^:{^x^:4,^y^:54,^tilesetIdx^:0,^tileSymbol^:^ɷ^},^5-54^:{^x^:5,^y^:54,^tilesetIdx^:0,^tileSymbol^:^ɸ^},^6-54^:{^x^:6,^y^:54,^tilesetIdx^:0,^tileSymbol^:^ɹ^},^7-54^:{^x^:7,^y^:54,^tilesetIdx^:0,^tileSymbol^:^ɺ^},^0-55^:{^x^:0,^y^:55,^tilesetIdx^:0,^tileSymbol^:^ɻ^},^1-55^:{^x^:1,^y^:55,^tilesetIdx^:0,^tileSymbol^:^ɼ^},^2-55^:{^x^:2,^y^:55,^tilesetIdx^:0,^tileSymbol^:^ɽ^},^3-55^:{^x^:3,^y^:55,^tilesetIdx^:0,^tileSymbol^:^ɾ^},^4-55^:{^x^:4,^y^:55,^tilesetIdx^:0,^tileSymbol^:^ɿ^},^5-55^:{^x^:5,^y^:55,^tilesetIdx^:0,^tileSymbol^:^ʀ^},^6-55^:{^x^:6,^y^:55,^tilesetIdx^:0,^tileSymbol^:^ʁ^},^7-55^:{^x^:7,^y^:55,^tilesetIdx^:0,^tileSymbol^:^ʂ^},^0-56^:{^x^:0,^y^:56,^tilesetIdx^:0,^tileSymbol^:^ʃ^},^1-56^:{^x^:1,^y^:56,^tilesetIdx^:0,^tileSymbol^:^ʄ^},^2-56^:{^x^:2,^y^:56,^tilesetIdx^:0,^tileSymbol^:^ʅ^},^3-56^:{^x^:3,^y^:56,^tilesetIdx^:0,^tileSymbol^:^ʆ^},^4-56^:{^x^:4,^y^:56,^tilesetIdx^:0,^tileSymbol^:^ʇ^},^5-56^:{^x^:5,^y^:56,^tilesetIdx^:0,^tileSymbol^:^ʈ^},^6-56^:{^x^:6,^y^:56,^tilesetIdx^:0,^tileSymbol^:^ʉ^},^7-56^:{^x^:7,^y^:56,^tilesetIdx^:0,^tileSymbol^:^ʊ^},^0-57^:{^x^:0,^y^:57,^tilesetIdx^:0,^tileSymbol^:^ʋ^},^1-57^:{^x^:1,^y^:57,^tilesetIdx^:0,^tileSymbol^:^ʌ^},^2-57^:{^x^:2,^y^:57,^tilesetIdx^:0,^tileSymbol^:^ʍ^},^3-57^:{^x^:3,^y^:57,^tilesetIdx^:0,^tileSymbol^:^ʎ^},^4-57^:{^x^:4,^y^:57,^tilesetIdx^:0,^tileSymbol^:^ʏ^},^5-57^:{^x^:5,^y^:57,^tilesetIdx^:0,^tileSymbol^:^ʐ^},^6-57^:{^x^:6,^y^:57,^tilesetIdx^:0,^tileSymbol^:^ʑ^},^7-57^:{^x^:7,^y^:57,^tilesetIdx^:0,^tileSymbol^:^ʒ^},^0-58^:{^x^:0,^y^:58,^tilesetIdx^:0,^tileSymbol^:^ʓ^},^1-58^:{^x^:1,^y^:58,^tilesetIdx^:0,^tileSymbol^:^ʔ^},^2-58^:{^x^:2,^y^:58,^tilesetIdx^:0,^tileSymbol^:^ʕ^},^3-58^:{^x^:3,^y^:58,^tilesetIdx^:0,^tileSymbol^:^ʖ^},^4-58^:{^x^:4,^y^:58,^tilesetIdx^:0,^tileSymbol^:^ʗ^},^5-58^:{^x^:5,^y^:58,^tilesetIdx^:0,^tileSymbol^:^ʘ^},^6-58^:{^x^:6,^y^:58,^tilesetIdx^:0,^tileSymbol^:^ʙ^},^7-58^:{^x^:7,^y^:58,^tilesetIdx^:0,^tileSymbol^:^ʚ^},^0-59^:{^x^:0,^y^:59,^tilesetIdx^:0,^tileSymbol^:^ʛ^},^1-59^:{^x^:1,^y^:59,^tilesetIdx^:0,^tileSymbol^:^ʜ^},^2-59^:{^x^:2,^y^:59,^tilesetIdx^:0,^tileSymbol^:^ʝ^},^3-59^:{^x^:3,^y^:59,^tilesetIdx^:0,^tileSymbol^:^ʞ^},^4-59^:{^x^:4,^y^:59,^tilesetIdx^:0,^tileSymbol^:^ʟ^},^5-59^:{^x^:5,^y^:59,^tilesetIdx^:0,^tileSymbol^:^ʠ^},^6-59^:{^x^:6,^y^:59,^tilesetIdx^:0,^tileSymbol^:^ʡ^},^7-59^:{^x^:7,^y^:59,^tilesetIdx^:0,^tileSymbol^:^ʢ^},^0-60^:{^x^:0,^y^:60,^tilesetIdx^:0,^tileSymbol^:^ʣ^},^1-60^:{^x^:1,^y^:60,^tilesetIdx^:0,^tileSymbol^:^ʤ^},^2-60^:{^x^:2,^y^:60,^tilesetIdx^:0,^tileSymbol^:^ʥ^},^3-60^:{^x^:3,^y^:60,^tilesetIdx^:0,^tileSymbol^:^ʦ^},^4-60^:{^x^:4,^y^:60,^tilesetIdx^:0,^tileSymbol^:^ʧ^},^5-60^:{^x^:5,^y^:60,^tilesetIdx^:0,^tileSymbol^:^ʨ^},^6-60^:{^x^:6,^y^:60,^tilesetIdx^:0,^tileSymbol^:^ʩ^},^7-60^:{^x^:7,^y^:60,^tilesetIdx^:0,^tileSymbol^:^ʪ^},^0-61^:{^x^:0,^y^:61,^tilesetIdx^:0,^tileSymbol^:^ʫ^},^1-61^:{^x^:1,^y^:61,^tilesetIdx^:0,^tileSymbol^:^ʬ^},^2-61^:{^x^:2,^y^:61,^tilesetIdx^:0,^tileSymbol^:^ʭ^},^3-61^:{^x^:3,^y^:61,^tilesetIdx^:0,^tileSymbol^:^ʮ^},^4-61^:{^x^:4,^y^:61,^tilesetIdx^:0,^tileSymbol^:^ʯ^},^5-61^:{^x^:5,^y^:61,^tilesetIdx^:0,^tileSymbol^:^ʰ^},^6-61^:{^x^:6,^y^:61,^tilesetIdx^:0,^tileSymbol^:^ʱ^},^7-61^:{^x^:7,^y^:61,^tilesetIdx^:0,^tileSymbol^:^ʲ^},^0-62^:{^x^:0,^y^:62,^tilesetIdx^:0,^tileSymbol^:^ʳ^},^1-62^:{^x^:1,^y^:62,^tilesetIdx^:0,^tileSymbol^:^ʴ^},^2-62^:{^x^:2,^y^:62,^tilesetIdx^:0,^tileSymbol^:^ʵ^},^3-62^:{^x^:3,^y^:62,^tilesetIdx^:0,^tileSymbol^:^ʶ^},^4-62^:{^x^:4,^y^:62,^tilesetIdx^:0,^tileSymbol^:^ʷ^},^5-62^:{^x^:5,^y^:62,^tilesetIdx^:0,^tileSymbol^:^ʸ^},^6-62^:{^x^:6,^y^:62,^tilesetIdx^:0,^tileSymbol^:^ʹ^},^7-62^:{^x^:7,^y^:62,^tilesetIdx^:0,^tileSymbol^:^ʺ^},^0-63^:{^x^:0,^y^:63,^tilesetIdx^:0,^tileSymbol^:^ʻ^},^1-63^:{^x^:1,^y^:63,^tilesetIdx^:0,^tileSymbol^:^ʼ^},^2-63^:{^x^:2,^y^:63,^tilesetIdx^:0,^tileSymbol^:^ʽ^},^3-63^:{^x^:3,^y^:63,^tilesetIdx^:0,^tileSymbol^:^ʾ^},^4-63^:{^x^:4,^y^:63,^tilesetIdx^:0,^tileSymbol^:^ʿ^},^5-63^:{^x^:5,^y^:63,^tilesetIdx^:0,^tileSymbol^:^ˀ^},^6-63^:{^x^:6,^y^:63,^tilesetIdx^:0,^tileSymbol^:^ˁ^},^7-63^:{^x^:7,^y^:63,^tilesetIdx^:0,^tileSymbol^:^˂^},^0-64^:{^x^:0,^y^:64,^tilesetIdx^:0,^tileSymbol^:^˃^},^1-64^:{^x^:1,^y^:64,^tilesetIdx^:0,^tileSymbol^:^˄^},^2-64^:{^x^:2,^y^:64,^tilesetIdx^:0,^tileSymbol^:^˅^},^3-64^:{^x^:3,^y^:64,^tilesetIdx^:0,^tileSymbol^:^ˆ^},^4-64^:{^x^:4,^y^:64,^tilesetIdx^:0,^tileSymbol^:^ˇ^},^5-64^:{^x^:5,^y^:64,^tilesetIdx^:0,^tileSymbol^:^ˈ^},^6-64^:{^x^:6,^y^:64,^tilesetIdx^:0,^tileSymbol^:^ˉ^},^7-64^:{^x^:7,^y^:64,^tilesetIdx^:0,^tileSymbol^:^ˊ^},^0-65^:{^x^:0,^y^:65,^tilesetIdx^:0,^tileSymbol^:^ˋ^},^1-65^:{^x^:1,^y^:65,^tilesetIdx^:0,^tileSymbol^:^ˌ^},^2-65^:{^x^:2,^y^:65,^tilesetIdx^:0,^tileSymbol^:^ˍ^},^3-65^:{^x^:3,^y^:65,^tilesetIdx^:0,^tileSymbol^:^ˎ^},^4-65^:{^x^:4,^y^:65,^tilesetIdx^:0,^tileSymbol^:^ˏ^},^5-65^:{^x^:5,^y^:65,^tilesetIdx^:0,^tileSymbol^:^ː^},^6-65^:{^x^:6,^y^:65,^tilesetIdx^:0,^tileSymbol^:^ˑ^},^7-65^:{^x^:7,^y^:65,^tilesetIdx^:0,^tileSymbol^:^˒^},^0-66^:{^x^:0,^y^:66,^tilesetIdx^:0,^tileSymbol^:^˓^},^1-66^:{^x^:1,^y^:66,^tilesetIdx^:0,^tileSymbol^:^˔^},^2-66^:{^x^:2,^y^:66,^tilesetIdx^:0,^tileSymbol^:^˕^},^3-66^:{^x^:3,^y^:66,^tilesetIdx^:0,^tileSymbol^:^˖^},^4-66^:{^x^:4,^y^:66,^tilesetIdx^:0,^tileSymbol^:^˗^},^5-66^:{^x^:5,^y^:66,^tilesetIdx^:0,^tileSymbol^:^˘^},^6-66^:{^x^:6,^y^:66,^tilesetIdx^:0,^tileSymbol^:^˙^},^7-66^:{^x^:7,^y^:66,^tilesetIdx^:0,^tileSymbol^:^˚^},^0-67^:{^x^:0,^y^:67,^tilesetIdx^:0,^tileSymbol^:^˛^},^1-67^:{^x^:1,^y^:67,^tilesetIdx^:0,^tileSymbol^:^˜^},^2-67^:{^x^:2,^y^:67,^tilesetIdx^:0,^tileSymbol^:^˝^},^3-67^:{^x^:3,^y^:67,^tilesetIdx^:0,^tileSymbol^:^˞^},^4-67^:{^x^:4,^y^:67,^tilesetIdx^:0,^tileSymbol^:^˟^},^5-67^:{^x^:5,^y^:67,^tilesetIdx^:0,^tileSymbol^:^ˠ^},^6-67^:{^x^:6,^y^:67,^tilesetIdx^:0,^tileSymbol^:^ˡ^},^7-67^:{^x^:7,^y^:67,^tilesetIdx^:0,^tileSymbol^:^ˢ^},^0-68^:{^x^:0,^y^:68,^tilesetIdx^:0,^tileSymbol^:^ˣ^},^1-68^:{^x^:1,^y^:68,^tilesetIdx^:0,^tileSymbol^:^ˤ^},^2-68^:{^x^:2,^y^:68,^tilesetIdx^:0,^tileSymbol^:^˥^},^3-68^:{^x^:3,^y^:68,^tilesetIdx^:0,^tileSymbol^:^˦^},^4-68^:{^x^:4,^y^:68,^tilesetIdx^:0,^tileSymbol^:^˧^},^5-68^:{^x^:5,^y^:68,^tilesetIdx^:0,^tileSymbol^:^˨^},^6-68^:{^x^:6,^y^:68,^tilesetIdx^:0,^tileSymbol^:^˩^},^7-68^:{^x^:7,^y^:68,^tilesetIdx^:0,^tileSymbol^:^˪^},^0-69^:{^x^:0,^y^:69,^tilesetIdx^:0,^tileSymbol^:^˫^},^1-69^:{^x^:1,^y^:69,^tilesetIdx^:0,^tileSymbol^:^ˬ^},^2-69^:{^x^:2,^y^:69,^tilesetIdx^:0,^tileSymbol^:^˭^},^3-69^:{^x^:3,^y^:69,^tilesetIdx^:0,^tileSymbol^:^ˮ^},^4-69^:{^x^:4,^y^:69,^tilesetIdx^:0,^tileSymbol^:^˯^},^5-69^:{^x^:5,^y^:69,^tilesetIdx^:0,^tileSymbol^:^˰^},^6-69^:{^x^:6,^y^:69,^tilesetIdx^:0,^tileSymbol^:^˱^},^7-69^:{^x^:7,^y^:69,^tilesetIdx^:0,^tileSymbol^:^˲^},^0-70^:{^x^:0,^y^:70,^tilesetIdx^:0,^tileSymbol^:^˳^},^1-70^:{^x^:1,^y^:70,^tilesetIdx^:0,^tileSymbol^:^˴^},^2-70^:{^x^:2,^y^:70,^tilesetIdx^:0,^tileSymbol^:^˵^},^3-70^:{^x^:3,^y^:70,^tilesetIdx^:0,^tileSymbol^:^˶^},^4-70^:{^x^:4,^y^:70,^tilesetIdx^:0,^tileSymbol^:^˷^},^5-70^:{^x^:5,^y^:70,^tilesetIdx^:0,^tileSymbol^:^˸^},^6-70^:{^x^:6,^y^:70,^tilesetIdx^:0,^tileSymbol^:^˹^},^7-70^:{^x^:7,^y^:70,^tilesetIdx^:0,^tileSymbol^:^˺^},^0-71^:{^x^:0,^y^:71,^tilesetIdx^:0,^tileSymbol^:^˻^},^1-71^:{^x^:1,^y^:71,^tilesetIdx^:0,^tileSymbol^:^˼^},^2-71^:{^x^:2,^y^:71,^tilesetIdx^:0,^tileSymbol^:^˽^},^3-71^:{^x^:3,^y^:71,^tilesetIdx^:0,^tileSymbol^:^˾^},^4-71^:{^x^:4,^y^:71,^tilesetIdx^:0,^tileSymbol^:^˿^},^5-71^:{^x^:5,^y^:71,^tilesetIdx^:0,^tileSymbol^:^̀^},^6-71^:{^x^:6,^y^:71,^tilesetIdx^:0,^tileSymbol^:^́^},^7-71^:{^x^:7,^y^:71,^tilesetIdx^:0,^tileSymbol^:^̂^},^0-72^:{^x^:0,^y^:72,^tilesetIdx^:0,^tileSymbol^:^̃^},^1-72^:{^x^:1,^y^:72,^tilesetIdx^:0,^tileSymbol^:^̄^},^2-72^:{^x^:2,^y^:72,^tilesetIdx^:0,^tileSymbol^:^̅^},^3-72^:{^x^:3,^y^:72,^tilesetIdx^:0,^tileSymbol^:^̆^},^4-72^:{^x^:4,^y^:72,^tilesetIdx^:0,^tileSymbol^:^̇^},^5-72^:{^x^:5,^y^:72,^tilesetIdx^:0,^tileSymbol^:^̈^},^6-72^:{^x^:6,^y^:72,^tilesetIdx^:0,^tileSymbol^:^̉^},^7-72^:{^x^:7,^y^:72,^tilesetIdx^:0,^tileSymbol^:^̊^},^0-73^:{^x^:0,^y^:73,^tilesetIdx^:0,^tileSymbol^:^̋^},^1-73^:{^x^:1,^y^:73,^tilesetIdx^:0,^tileSymbol^:^̌^},^2-73^:{^x^:2,^y^:73,^tilesetIdx^:0,^tileSymbol^:^̍^},^3-73^:{^x^:3,^y^:73,^tilesetIdx^:0,^tileSymbol^:^̎^},^4-73^:{^x^:4,^y^:73,^tilesetIdx^:0,^tileSymbol^:^̏^},^5-73^:{^x^:5,^y^:73,^tilesetIdx^:0,^tileSymbol^:^̐^},^6-73^:{^x^:6,^y^:73,^tilesetIdx^:0,^tileSymbol^:^̑^},^7-73^:{^x^:7,^y^:73,^tilesetIdx^:0,^tileSymbol^:^̒^},^0-74^:{^x^:0,^y^:74,^tilesetIdx^:0,^tileSymbol^:^̓^},^1-74^:{^x^:1,^y^:74,^tilesetIdx^:0,^tileSymbol^:^̔^},^2-74^:{^x^:2,^y^:74,^tilesetIdx^:0,^tileSymbol^:^̕^},^3-74^:{^x^:3,^y^:74,^tilesetIdx^:0,^tileSymbol^:^̖^},^4-74^:{^x^:4,^y^:74,^tilesetIdx^:0,^tileSymbol^:^̗^},^5-74^:{^x^:5,^y^:74,^tilesetIdx^:0,^tileSymbol^:^̘^},^6-74^:{^x^:6,^y^:74,^tilesetIdx^:0,^tileSymbol^:^̙^},^7-74^:{^x^:7,^y^:74,^tilesetIdx^:0,^tileSymbol^:^̚^},^0-75^:{^x^:0,^y^:75,^tilesetIdx^:0,^tileSymbol^:^̛^},^1-75^:{^x^:1,^y^:75,^tilesetIdx^:0,^tileSymbol^:^̜^},^2-75^:{^x^:2,^y^:75,^tilesetIdx^:0,^tileSymbol^:^̝^},^3-75^:{^x^:3,^y^:75,^tilesetIdx^:0,^tileSymbol^:^̞^},^4-75^:{^x^:4,^y^:75,^tilesetIdx^:0,^tileSymbol^:^̟^},^5-75^:{^x^:5,^y^:75,^tilesetIdx^:0,^tileSymbol^:^̠^},^6-75^:{^x^:6,^y^:75,^tilesetIdx^:0,^tileSymbol^:^̡^},^7-75^:{^x^:7,^y^:75,^tilesetIdx^:0,^tileSymbol^:^̢^},^0-76^:{^x^:0,^y^:76,^tilesetIdx^:0,^tileSymbol^:^̣^},^1-76^:{^x^:1,^y^:76,^tilesetIdx^:0,^tileSymbol^:^̤^},^2-76^:{^x^:2,^y^:76,^tilesetIdx^:0,^tileSymbol^:^̥^},^3-76^:{^x^:3,^y^:76,^tilesetIdx^:0,^tileSymbol^:^̦^},^4-76^:{^x^:4,^y^:76,^tilesetIdx^:0,^tileSymbol^:^̧^},^5-76^:{^x^:5,^y^:76,^tilesetIdx^:0,^tileSymbol^:^̨^},^6-76^:{^x^:6,^y^:76,^tilesetIdx^:0,^tileSymbol^:^̩^},^7-76^:{^x^:7,^y^:76,^tilesetIdx^:0,^tileSymbol^:^̪^},^0-77^:{^x^:0,^y^:77,^tilesetIdx^:0,^tileSymbol^:^̫^},^1-77^:{^x^:1,^y^:77,^tilesetIdx^:0,^tileSymbol^:^̬^},^2-77^:{^x^:2,^y^:77,^tilesetIdx^:0,^tileSymbol^:^̭^},^3-77^:{^x^:3,^y^:77,^tilesetIdx^:0,^tileSymbol^:^̮^},^4-77^:{^x^:4,^y^:77,^tilesetIdx^:0,^tileSymbol^:^̯^},^5-77^:{^x^:5,^y^:77,^tilesetIdx^:0,^tileSymbol^:^̰^},^6-77^:{^x^:6,^y^:77,^tilesetIdx^:0,^tileSymbol^:^̱^},^7-77^:{^x^:7,^y^:77,^tilesetIdx^:0,^tileSymbol^:^̲^},^0-78^:{^x^:0,^y^:78,^tilesetIdx^:0,^tileSymbol^:^̳^},^1-78^:{^x^:1,^y^:78,^tilesetIdx^:0,^tileSymbol^:^̴^},^2-78^:{^x^:2,^y^:78,^tilesetIdx^:0,^tileSymbol^:^̵^},^3-78^:{^x^:3,^y^:78,^tilesetIdx^:0,^tileSymbol^:^̶^},^4-78^:{^x^:4,^y^:78,^tilesetIdx^:0,^tileSymbol^:^̷^},^5-78^:{^x^:5,^y^:78,^tilesetIdx^:0,^tileSymbol^:^̸^},^6-78^:{^x^:6,^y^:78,^tilesetIdx^:0,^tileSymbol^:^̹^},^7-78^:{^x^:7,^y^:78,^tilesetIdx^:0,^tileSymbol^:^̺^},^0-79^:{^x^:0,^y^:79,^tilesetIdx^:0,^tileSymbol^:^̻^},^1-79^:{^x^:1,^y^:79,^tilesetIdx^:0,^tileSymbol^:^̼^},^2-79^:{^x^:2,^y^:79,^tilesetIdx^:0,^tileSymbol^:^̽^},^3-79^:{^x^:3,^y^:79,^tilesetIdx^:0,^tileSymbol^:^̾^},^4-79^:{^x^:4,^y^:79,^tilesetIdx^:0,^tileSymbol^:^̿^},^5-79^:{^x^:5,^y^:79,^tilesetIdx^:0,^tileSymbol^:^̀^},^6-79^:{^x^:6,^y^:79,^tilesetIdx^:0,^tileSymbol^:^́^},^7-79^:{^x^:7,^y^:79,^tilesetIdx^:0,^tileSymbol^:^͂^},^0-80^:{^x^:0,^y^:80,^tilesetIdx^:0,^tileSymbol^:^̓^},^1-80^:{^x^:1,^y^:80,^tilesetIdx^:0,^tileSymbol^:^̈́^},^2-80^:{^x^:2,^y^:80,^tilesetIdx^:0,^tileSymbol^:^ͅ^},^3-80^:{^x^:3,^y^:80,^tilesetIdx^:0,^tileSymbol^:^͆^},^4-80^:{^x^:4,^y^:80,^tilesetIdx^:0,^tileSymbol^:^͇^},^5-80^:{^x^:5,^y^:80,^tilesetIdx^:0,^tileSymbol^:^͈^},^6-80^:{^x^:6,^y^:80,^tilesetIdx^:0,^tileSymbol^:^͉^},^7-80^:{^x^:7,^y^:80,^tilesetIdx^:0,^tileSymbol^:^͊^},^0-81^:{^x^:0,^y^:81,^tilesetIdx^:0,^tileSymbol^:^͋^},^1-81^:{^x^:1,^y^:81,^tilesetIdx^:0,^tileSymbol^:^͌^},^2-81^:{^x^:2,^y^:81,^tilesetIdx^:0,^tileSymbol^:^͍^},^3-81^:{^x^:3,^y^:81,^tilesetIdx^:0,^tileSymbol^:^͎^},^4-81^:{^x^:4,^y^:81,^tilesetIdx^:0,^tileSymbol^:^͏^},^5-81^:{^x^:5,^y^:81,^tilesetIdx^:0,^tileSymbol^:^͐^},^6-81^:{^x^:6,^y^:81,^tilesetIdx^:0,^tileSymbol^:^͑^},^7-81^:{^x^:7,^y^:81,^tilesetIdx^:0,^tileSymbol^:^͒^},^0-82^:{^x^:0,^y^:82,^tilesetIdx^:0,^tileSymbol^:^͓^},^1-82^:{^x^:1,^y^:82,^tilesetIdx^:0,^tileSymbol^:^͔^},^2-82^:{^x^:2,^y^:82,^tilesetIdx^:0,^tileSymbol^:^͕^},^3-82^:{^x^:3,^y^:82,^tilesetIdx^:0,^tileSymbol^:^͖^},^4-82^:{^x^:4,^y^:82,^tilesetIdx^:0,^tileSymbol^:^͗^},^5-82^:{^x^:5,^y^:82,^tilesetIdx^:0,^tileSymbol^:^͘^},^6-82^:{^x^:6,^y^:82,^tilesetIdx^:0,^tileSymbol^:^͙^},^7-82^:{^x^:7,^y^:82,^tilesetIdx^:0,^tileSymbol^:^͚^},^0-83^:{^x^:0,^y^:83,^tilesetIdx^:0,^tileSymbol^:^͛^},^1-83^:{^x^:1,^y^:83,^tilesetIdx^:0,^tileSymbol^:^͜^},^2-83^:{^x^:2,^y^:83,^tilesetIdx^:0,^tileSymbol^:^͝^},^3-83^:{^x^:3,^y^:83,^tilesetIdx^:0,^tileSymbol^:^͞^},^4-83^:{^x^:4,^y^:83,^tilesetIdx^:0,^tileSymbol^:^͟^},^5-83^:{^x^:5,^y^:83,^tilesetIdx^:0,^tileSymbol^:^͠^},^6-83^:{^x^:6,^y^:83,^tilesetIdx^:0,^tileSymbol^:^͡^},^7-83^:{^x^:7,^y^:83,^tilesetIdx^:0,^tileSymbol^:^͢^},^0-84^:{^x^:0,^y^:84,^tilesetIdx^:0,^tileSymbol^:^ͣ^},^1-84^:{^x^:1,^y^:84,^tilesetIdx^:0,^tileSymbol^:^ͤ^},^2-84^:{^x^:2,^y^:84,^tilesetIdx^:0,^tileSymbol^:^ͥ^},^3-84^:{^x^:3,^y^:84,^tilesetIdx^:0,^tileSymbol^:^ͦ^},^4-84^:{^x^:4,^y^:84,^tilesetIdx^:0,^tileSymbol^:^ͧ^},^5-84^:{^x^:5,^y^:84,^tilesetIdx^:0,^tileSymbol^:^ͨ^},^6-84^:{^x^:6,^y^:84,^tilesetIdx^:0,^tileSymbol^:^ͩ^},^7-84^:{^x^:7,^y^:84,^tilesetIdx^:0,^tileSymbol^:^ͪ^},^0-85^:{^x^:0,^y^:85,^tilesetIdx^:0,^tileSymbol^:^ͫ^},^1-85^:{^x^:1,^y^:85,^tilesetIdx^:0,^tileSymbol^:^ͬ^},^2-85^:{^x^:2,^y^:85,^tilesetIdx^:0,^tileSymbol^:^ͭ^},^3-85^:{^x^:3,^y^:85,^tilesetIdx^:0,^tileSymbol^:^ͮ^},^4-85^:{^x^:4,^y^:85,^tilesetIdx^:0,^tileSymbol^:^ͯ^},^5-85^:{^x^:5,^y^:85,^tilesetIdx^:0,^tileSymbol^:^Ͱ^},^6-85^:{^x^:6,^y^:85,^tilesetIdx^:0,^tileSymbol^:^ͱ^},^7-85^:{^x^:7,^y^:85,^tilesetIdx^:0,^tileSymbol^:^Ͳ^},^0-86^:{^x^:0,^y^:86,^tilesetIdx^:0,^tileSymbol^:^ͳ^},^1-86^:{^x^:1,^y^:86,^tilesetIdx^:0,^tileSymbol^:^ʹ^},^2-86^:{^x^:2,^y^:86,^tilesetIdx^:0,^tileSymbol^:^͵^},^3-86^:{^x^:3,^y^:86,^tilesetIdx^:0,^tileSymbol^:^Ͷ^},^4-86^:{^x^:4,^y^:86,^tilesetIdx^:0,^tileSymbol^:^ͷ^},^5-86^:{^x^:5,^y^:86,^tilesetIdx^:0,^tileSymbol^:^͸^},^6-86^:{^x^:6,^y^:86,^tilesetIdx^:0,^tileSymbol^:^͹^},^7-86^:{^x^:7,^y^:86,^tilesetIdx^:0,^tileSymbol^:^ͺ^},^0-87^:{^x^:0,^y^:87,^tilesetIdx^:0,^tileSymbol^:^ͻ^},^1-87^:{^x^:1,^y^:87,^tilesetIdx^:0,^tileSymbol^:^ͼ^},^2-87^:{^x^:2,^y^:87,^tilesetIdx^:0,^tileSymbol^:^ͽ^},^3-87^:{^x^:3,^y^:87,^tilesetIdx^:0,^tileSymbol^:^;^},^4-87^:{^x^:4,^y^:87,^tilesetIdx^:0,^tileSymbol^:^Ϳ^},^5-87^:{^x^:5,^y^:87,^tilesetIdx^:0,^tileSymbol^:^΀^},^6-87^:{^x^:6,^y^:87,^tilesetIdx^:0,^tileSymbol^:^΁^},^7-87^:{^x^:7,^y^:87,^tilesetIdx^:0,^tileSymbol^:^΂^},^0-88^:{^x^:0,^y^:88,^tilesetIdx^:0,^tileSymbol^:^΃^},^1-88^:{^x^:1,^y^:88,^tilesetIdx^:0,^tileSymbol^:^΄^},^2-88^:{^x^:2,^y^:88,^tilesetIdx^:0,^tileSymbol^:^΅^},^3-88^:{^x^:3,^y^:88,^tilesetIdx^:0,^tileSymbol^:^Ά^},^4-88^:{^x^:4,^y^:88,^tilesetIdx^:0,^tileSymbol^:^·^},^5-88^:{^x^:5,^y^:88,^tilesetIdx^:0,^tileSymbol^:^Έ^},^6-88^:{^x^:6,^y^:88,^tilesetIdx^:0,^tileSymbol^:^Ή^},^7-88^:{^x^:7,^y^:88,^tilesetIdx^:0,^tileSymbol^:^Ί^},^0-89^:{^x^:0,^y^:89,^tilesetIdx^:0,^tileSymbol^:^΋^},^1-89^:{^x^:1,^y^:89,^tilesetIdx^:0,^tileSymbol^:^Ό^},^2-89^:{^x^:2,^y^:89,^tilesetIdx^:0,^tileSymbol^:^΍^},^3-89^:{^x^:3,^y^:89,^tilesetIdx^:0,^tileSymbol^:^Ύ^},^4-89^:{^x^:4,^y^:89,^tilesetIdx^:0,^tileSymbol^:^Ώ^},^5-89^:{^x^:5,^y^:89,^tilesetIdx^:0,^tileSymbol^:^ΐ^},^6-89^:{^x^:6,^y^:89,^tilesetIdx^:0,^tileSymbol^:^Α^},^7-89^:{^x^:7,^y^:89,^tilesetIdx^:0,^tileSymbol^:^Β^},^0-90^:{^x^:0,^y^:90,^tilesetIdx^:0,^tileSymbol^:^Γ^},^1-90^:{^x^:1,^y^:90,^tilesetIdx^:0,^tileSymbol^:^Δ^},^2-90^:{^x^:2,^y^:90,^tilesetIdx^:0,^tileSymbol^:^Ε^},^3-90^:{^x^:3,^y^:90,^tilesetIdx^:0,^tileSymbol^:^Ζ^},^4-90^:{^x^:4,^y^:90,^tilesetIdx^:0,^tileSymbol^:^Η^},^5-90^:{^x^:5,^y^:90,^tilesetIdx^:0,^tileSymbol^:^Θ^},^6-90^:{^x^:6,^y^:90,^tilesetIdx^:0,^tileSymbol^:^Ι^},^7-90^:{^x^:7,^y^:90,^tilesetIdx^:0,^tileSymbol^:^Κ^},^0-91^:{^x^:0,^y^:91,^tilesetIdx^:0,^tileSymbol^:^Λ^},^1-91^:{^x^:1,^y^:91,^tilesetIdx^:0,^tileSymbol^:^Μ^},^2-91^:{^x^:2,^y^:91,^tilesetIdx^:0,^tileSymbol^:^Ν^},^3-91^:{^x^:3,^y^:91,^tilesetIdx^:0,^tileSymbol^:^Ξ^},^4-91^:{^x^:4,^y^:91,^tilesetIdx^:0,^tileSymbol^:^Ο^},^5-91^:{^x^:5,^y^:91,^tilesetIdx^:0,^tileSymbol^:^Π^},^6-91^:{^x^:6,^y^:91,^tilesetIdx^:0,^tileSymbol^:^Ρ^},^7-91^:{^x^:7,^y^:91,^tilesetIdx^:0,^tileSymbol^:^΢^},^0-92^:{^x^:0,^y^:92,^tilesetIdx^:0,^tileSymbol^:^Σ^},^1-92^:{^x^:1,^y^:92,^tilesetIdx^:0,^tileSymbol^:^Τ^},^2-92^:{^x^:2,^y^:92,^tilesetIdx^:0,^tileSymbol^:^Υ^},^3-92^:{^x^:3,^y^:92,^tilesetIdx^:0,^tileSymbol^:^Φ^},^4-92^:{^x^:4,^y^:92,^tilesetIdx^:0,^tileSymbol^:^Χ^},^5-92^:{^x^:5,^y^:92,^tilesetIdx^:0,^tileSymbol^:^Ψ^},^6-92^:{^x^:6,^y^:92,^tilesetIdx^:0,^tileSymbol^:^Ω^},^7-92^:{^x^:7,^y^:92,^tilesetIdx^:0,^tileSymbol^:^Ϊ^},^0-93^:{^x^:0,^y^:93,^tilesetIdx^:0,^tileSymbol^:^Ϋ^},^1-93^:{^x^:1,^y^:93,^tilesetIdx^:0,^tileSymbol^:^ά^},^2-93^:{^x^:2,^y^:93,^tilesetIdx^:0,^tileSymbol^:^έ^},^3-93^:{^x^:3,^y^:93,^tilesetIdx^:0,^tileSymbol^:^ή^},^4-93^:{^x^:4,^y^:93,^tilesetIdx^:0,^tileSymbol^:^ί^},^5-93^:{^x^:5,^y^:93,^tilesetIdx^:0,^tileSymbol^:^ΰ^},^6-93^:{^x^:6,^y^:93,^tilesetIdx^:0,^tileSymbol^:^α^},^7-93^:{^x^:7,^y^:93,^tilesetIdx^:0,^tileSymbol^:^β^},^0-94^:{^x^:0,^y^:94,^tilesetIdx^:0,^tileSymbol^:^γ^},^1-94^:{^x^:1,^y^:94,^tilesetIdx^:0,^tileSymbol^:^δ^},^2-94^:{^x^:2,^y^:94,^tilesetIdx^:0,^tileSymbol^:^ε^},^3-94^:{^x^:3,^y^:94,^tilesetIdx^:0,^tileSymbol^:^ζ^},^4-94^:{^x^:4,^y^:94,^tilesetIdx^:0,^tileSymbol^:^η^},^5-94^:{^x^:5,^y^:94,^tilesetIdx^:0,^tileSymbol^:^θ^},^6-94^:{^x^:6,^y^:94,^tilesetIdx^:0,^tileSymbol^:^ι^},^7-94^:{^x^:7,^y^:94,^tilesetIdx^:0,^tileSymbol^:^κ^},^0-95^:{^x^:0,^y^:95,^tilesetIdx^:0,^tileSymbol^:^λ^},^1-95^:{^x^:1,^y^:95,^tilesetIdx^:0,^tileSymbol^:^μ^},^2-95^:{^x^:2,^y^:95,^tilesetIdx^:0,^tileSymbol^:^ν^},^3-95^:{^x^:3,^y^:95,^tilesetIdx^:0,^tileSymbol^:^ξ^},^4-95^:{^x^:4,^y^:95,^tilesetIdx^:0,^tileSymbol^:^ο^},^5-95^:{^x^:5,^y^:95,^tilesetIdx^:0,^tileSymbol^:^π^},^6-95^:{^x^:6,^y^:95,^tilesetIdx^:0,^tileSymbol^:^ρ^},^7-95^:{^x^:7,^y^:95,^tilesetIdx^:0,^tileSymbol^:^ς^},^0-96^:{^x^:0,^y^:96,^tilesetIdx^:0,^tileSymbol^:^σ^},^1-96^:{^x^:1,^y^:96,^tilesetIdx^:0,^tileSymbol^:^τ^},^2-96^:{^x^:2,^y^:96,^tilesetIdx^:0,^tileSymbol^:^υ^},^3-96^:{^x^:3,^y^:96,^tilesetIdx^:0,^tileSymbol^:^φ^},^4-96^:{^x^:4,^y^:96,^tilesetIdx^:0,^tileSymbol^:^χ^},^5-96^:{^x^:5,^y^:96,^tilesetIdx^:0,^tileSymbol^:^ψ^},^6-96^:{^x^:6,^y^:96,^tilesetIdx^:0,^tileSymbol^:^ω^},^7-96^:{^x^:7,^y^:96,^tilesetIdx^:0,^tileSymbol^:^ϊ^},^0-97^:{^x^:0,^y^:97,^tilesetIdx^:0,^tileSymbol^:^ϋ^},^1-97^:{^x^:1,^y^:97,^tilesetIdx^:0,^tileSymbol^:^ό^},^2-97^:{^x^:2,^y^:97,^tilesetIdx^:0,^tileSymbol^:^ύ^},^3-97^:{^x^:3,^y^:97,^tilesetIdx^:0,^tileSymbol^:^ώ^},^4-97^:{^x^:4,^y^:97,^tilesetIdx^:0,^tileSymbol^:^Ϗ^},^5-97^:{^x^:5,^y^:97,^tilesetIdx^:0,^tileSymbol^:^ϐ^},^6-97^:{^x^:6,^y^:97,^tilesetIdx^:0,^tileSymbol^:^ϑ^},^7-97^:{^x^:7,^y^:97,^tilesetIdx^:0,^tileSymbol^:^ϒ^},^0-98^:{^x^:0,^y^:98,^tilesetIdx^:0,^tileSymbol^:^ϓ^},^1-98^:{^x^:1,^y^:98,^tilesetIdx^:0,^tileSymbol^:^ϔ^},^2-98^:{^x^:2,^y^:98,^tilesetIdx^:0,^tileSymbol^:^ϕ^},^3-98^:{^x^:3,^y^:98,^tilesetIdx^:0,^tileSymbol^:^ϖ^},^4-98^:{^x^:4,^y^:98,^tilesetIdx^:0,^tileSymbol^:^ϗ^},^5-98^:{^x^:5,^y^:98,^tilesetIdx^:0,^tileSymbol^:^Ϙ^},^6-98^:{^x^:6,^y^:98,^tilesetIdx^:0,^tileSymbol^:^ϙ^},^7-98^:{^x^:7,^y^:98,^tilesetIdx^:0,^tileSymbol^:^Ϛ^},^0-99^:{^x^:0,^y^:99,^tilesetIdx^:0,^tileSymbol^:^ϛ^},^1-99^:{^x^:1,^y^:99,^tilesetIdx^:0,^tileSymbol^:^Ϝ^},^2-99^:{^x^:2,^y^:99,^tilesetIdx^:0,^tileSymbol^:^ϝ^},^3-99^:{^x^:3,^y^:99,^tilesetIdx^:0,^tileSymbol^:^Ϟ^},^4-99^:{^x^:4,^y^:99,^tilesetIdx^:0,^tileSymbol^:^ϟ^},^5-99^:{^x^:5,^y^:99,^tilesetIdx^:0,^tileSymbol^:^Ϡ^},^6-99^:{^x^:6,^y^:99,^tilesetIdx^:0,^tileSymbol^:^ϡ^},^7-99^:{^x^:7,^y^:99,^tilesetIdx^:0,^tileSymbol^:^Ϣ^},^0-100^:{^x^:0,^y^:100,^tilesetIdx^:0,^tileSymbol^:^ϣ^},^1-100^:{^x^:1,^y^:100,^tilesetIdx^:0,^tileSymbol^:^Ϥ^},^2-100^:{^x^:2,^y^:100,^tilesetIdx^:0,^tileSymbol^:^ϥ^},^3-100^:{^x^:3,^y^:100,^tilesetIdx^:0,^tileSymbol^:^Ϧ^},^4-100^:{^x^:4,^y^:100,^tilesetIdx^:0,^tileSymbol^:^ϧ^},^5-100^:{^x^:5,^y^:100,^tilesetIdx^:0,^tileSymbol^:^Ϩ^},^6-100^:{^x^:6,^y^:100,^tilesetIdx^:0,^tileSymbol^:^ϩ^},^7-100^:{^x^:7,^y^:100,^tilesetIdx^:0,^tileSymbol^:^Ϫ^},^0-101^:{^x^:0,^y^:101,^tilesetIdx^:0,^tileSymbol^:^ϫ^},^1-101^:{^x^:1,^y^:101,^tilesetIdx^:0,^tileSymbol^:^Ϭ^},^2-101^:{^x^:2,^y^:101,^tilesetIdx^:0,^tileSymbol^:^ϭ^},^3-101^:{^x^:3,^y^:101,^tilesetIdx^:0,^tileSymbol^:^Ϯ^},^4-101^:{^x^:4,^y^:101,^tilesetIdx^:0,^tileSymbol^:^ϯ^},^5-101^:{^x^:5,^y^:101,^tilesetIdx^:0,^tileSymbol^:^ϰ^},^6-101^:{^x^:6,^y^:101,^tilesetIdx^:0,^tileSymbol^:^ϱ^},^7-101^:{^x^:7,^y^:101,^tilesetIdx^:0,^tileSymbol^:^ϲ^},^0-102^:{^x^:0,^y^:102,^tilesetIdx^:0,^tileSymbol^:^ϳ^},^1-102^:{^x^:1,^y^:102,^tilesetIdx^:0,^tileSymbol^:^ϴ^},^2-102^:{^x^:2,^y^:102,^tilesetIdx^:0,^tileSymbol^:^ϵ^},^3-102^:{^x^:3,^y^:102,^tilesetIdx^:0,^tileSymbol^:^϶^},^4-102^:{^x^:4,^y^:102,^tilesetIdx^:0,^tileSymbol^:^Ϸ^},^5-102^:{^x^:5,^y^:102,^tilesetIdx^:0,^tileSymbol^:^ϸ^},^6-102^:{^x^:6,^y^:102,^tilesetIdx^:0,^tileSymbol^:^Ϲ^},^7-102^:{^x^:7,^y^:102,^tilesetIdx^:0,^tileSymbol^:^Ϻ^},^0-103^:{^x^:0,^y^:103,^tilesetIdx^:0,^tileSymbol^:^ϻ^},^1-103^:{^x^:1,^y^:103,^tilesetIdx^:0,^tileSymbol^:^ϼ^},^2-103^:{^x^:2,^y^:103,^tilesetIdx^:0,^tileSymbol^:^Ͻ^},^3-103^:{^x^:3,^y^:103,^tilesetIdx^:0,^tileSymbol^:^Ͼ^},^4-103^:{^x^:4,^y^:103,^tilesetIdx^:0,^tileSymbol^:^Ͽ^},^5-103^:{^x^:5,^y^:103,^tilesetIdx^:0,^tileSymbol^:^Ѐ^},^6-103^:{^x^:6,^y^:103,^tilesetIdx^:0,^tileSymbol^:^Ё^},^7-103^:{^x^:7,^y^:103,^tilesetIdx^:0,^tileSymbol^:^Ђ^},^0-104^:{^x^:0,^y^:104,^tilesetIdx^:0,^tileSymbol^:^Ѓ^},^1-104^:{^x^:1,^y^:104,^tilesetIdx^:0,^tileSymbol^:^Є^},^2-104^:{^x^:2,^y^:104,^tilesetIdx^:0,^tileSymbol^:^Ѕ^},^3-104^:{^x^:3,^y^:104,^tilesetIdx^:0,^tileSymbol^:^І^},^4-104^:{^x^:4,^y^:104,^tilesetIdx^:0,^tileSymbol^:^Ї^},^5-104^:{^x^:5,^y^:104,^tilesetIdx^:0,^tileSymbol^:^Ј^},^6-104^:{^x^:6,^y^:104,^tilesetIdx^:0,^tileSymbol^:^Љ^},^7-104^:{^x^:7,^y^:104,^tilesetIdx^:0,^tileSymbol^:^Њ^},^0-105^:{^x^:0,^y^:105,^tilesetIdx^:0,^tileSymbol^:^Ћ^},^1-105^:{^x^:1,^y^:105,^tilesetIdx^:0,^tileSymbol^:^Ќ^},^2-105^:{^x^:2,^y^:105,^tilesetIdx^:0,^tileSymbol^:^Ѝ^},^3-105^:{^x^:3,^y^:105,^tilesetIdx^:0,^tileSymbol^:^Ў^},^4-105^:{^x^:4,^y^:105,^tilesetIdx^:0,^tileSymbol^:^Џ^},^5-105^:{^x^:5,^y^:105,^tilesetIdx^:0,^tileSymbol^:^А^},^6-105^:{^x^:6,^y^:105,^tilesetIdx^:0,^tileSymbol^:^Б^},^7-105^:{^x^:7,^y^:105,^tilesetIdx^:0,^tileSymbol^:^В^},^0-106^:{^x^:0,^y^:106,^tilesetIdx^:0,^tileSymbol^:^Г^},^1-106^:{^x^:1,^y^:106,^tilesetIdx^:0,^tileSymbol^:^Д^},^2-106^:{^x^:2,^y^:106,^tilesetIdx^:0,^tileSymbol^:^Е^},^3-106^:{^x^:3,^y^:106,^tilesetIdx^:0,^tileSymbol^:^Ж^},^4-106^:{^x^:4,^y^:106,^tilesetIdx^:0,^tileSymbol^:^З^},^5-106^:{^x^:5,^y^:106,^tilesetIdx^:0,^tileSymbol^:^И^},^6-106^:{^x^:6,^y^:106,^tilesetIdx^:0,^tileSymbol^:^Й^},^7-106^:{^x^:7,^y^:106,^tilesetIdx^:0,^tileSymbol^:^К^},^0-107^:{^x^:0,^y^:107,^tilesetIdx^:0,^tileSymbol^:^Л^},^1-107^:{^x^:1,^y^:107,^tilesetIdx^:0,^tileSymbol^:^М^},^2-107^:{^x^:2,^y^:107,^tilesetIdx^:0,^tileSymbol^:^Н^},^3-107^:{^x^:3,^y^:107,^tilesetIdx^:0,^tileSymbol^:^О^},^4-107^:{^x^:4,^y^:107,^tilesetIdx^:0,^tileSymbol^:^П^},^5-107^:{^x^:5,^y^:107,^tilesetIdx^:0,^tileSymbol^:^Р^},^6-107^:{^x^:6,^y^:107,^tilesetIdx^:0,^tileSymbol^:^С^},^7-107^:{^x^:7,^y^:107,^tilesetIdx^:0,^tileSymbol^:^Т^},^0-108^:{^x^:0,^y^:108,^tilesetIdx^:0,^tileSymbol^:^У^},^1-108^:{^x^:1,^y^:108,^tilesetIdx^:0,^tileSymbol^:^Ф^},^2-108^:{^x^:2,^y^:108,^tilesetIdx^:0,^tileSymbol^:^Х^},^3-108^:{^x^:3,^y^:108,^tilesetIdx^:0,^tileSymbol^:^Ц^},^4-108^:{^x^:4,^y^:108,^tilesetIdx^:0,^tileSymbol^:^Ч^},^5-108^:{^x^:5,^y^:108,^tilesetIdx^:0,^tileSymbol^:^Ш^},^6-108^:{^x^:6,^y^:108,^tilesetIdx^:0,^tileSymbol^:^Щ^},^7-108^:{^x^:7,^y^:108,^tilesetIdx^:0,^tileSymbol^:^Ъ^},^0-109^:{^x^:0,^y^:109,^tilesetIdx^:0,^tileSymbol^:^Ы^},^1-109^:{^x^:1,^y^:109,^tilesetIdx^:0,^tileSymbol^:^Ь^},^2-109^:{^x^:2,^y^:109,^tilesetIdx^:0,^tileSymbol^:^Э^},^3-109^:{^x^:3,^y^:109,^tilesetIdx^:0,^tileSymbol^:^Ю^},^4-109^:{^x^:4,^y^:109,^tilesetIdx^:0,^tileSymbol^:^Я^},^5-109^:{^x^:5,^y^:109,^tilesetIdx^:0,^tileSymbol^:^а^},^6-109^:{^x^:6,^y^:109,^tilesetIdx^:0,^tileSymbol^:^б^},^7-109^:{^x^:7,^y^:109,^tilesetIdx^:0,^tileSymbol^:^в^},^0-110^:{^x^:0,^y^:110,^tilesetIdx^:0,^tileSymbol^:^г^},^1-110^:{^x^:1,^y^:110,^tilesetIdx^:0,^tileSymbol^:^д^},^2-110^:{^x^:2,^y^:110,^tilesetIdx^:0,^tileSymbol^:^е^},^3-110^:{^x^:3,^y^:110,^tilesetIdx^:0,^tileSymbol^:^ж^},^4-110^:{^x^:4,^y^:110,^tilesetIdx^:0,^tileSymbol^:^з^},^5-110^:{^x^:5,^y^:110,^tilesetIdx^:0,^tileSymbol^:^и^},^6-110^:{^x^:6,^y^:110,^tilesetIdx^:0,^tileSymbol^:^й^},^7-110^:{^x^:7,^y^:110,^tilesetIdx^:0,^tileSymbol^:^к^},^0-111^:{^x^:0,^y^:111,^tilesetIdx^:0,^tileSymbol^:^л^},^1-111^:{^x^:1,^y^:111,^tilesetIdx^:0,^tileSymbol^:^м^},^2-111^:{^x^:2,^y^:111,^tilesetIdx^:0,^tileSymbol^:^н^},^3-111^:{^x^:3,^y^:111,^tilesetIdx^:0,^tileSymbol^:^о^},^4-111^:{^x^:4,^y^:111,^tilesetIdx^:0,^tileSymbol^:^п^},^5-111^:{^x^:5,^y^:111,^tilesetIdx^:0,^tileSymbol^:^р^},^6-111^:{^x^:6,^y^:111,^tilesetIdx^:0,^tileSymbol^:^с^},^7-111^:{^x^:7,^y^:111,^tilesetIdx^:0,^tileSymbol^:^т^},^0-112^:{^x^:0,^y^:112,^tilesetIdx^:0,^tileSymbol^:^у^},^1-112^:{^x^:1,^y^:112,^tilesetIdx^:0,^tileSymbol^:^ф^},^2-112^:{^x^:2,^y^:112,^tilesetIdx^:0,^tileSymbol^:^х^},^3-112^:{^x^:3,^y^:112,^tilesetIdx^:0,^tileSymbol^:^ц^},^4-112^:{^x^:4,^y^:112,^tilesetIdx^:0,^tileSymbol^:^ч^},^5-112^:{^x^:5,^y^:112,^tilesetIdx^:0,^tileSymbol^:^ш^},^6-112^:{^x^:6,^y^:112,^tilesetIdx^:0,^tileSymbol^:^щ^},^7-112^:{^x^:7,^y^:112,^tilesetIdx^:0,^tileSymbol^:^ъ^},^0-113^:{^x^:0,^y^:113,^tilesetIdx^:0,^tileSymbol^:^ы^},^1-113^:{^x^:1,^y^:113,^tilesetIdx^:0,^tileSymbol^:^ь^},^2-113^:{^x^:2,^y^:113,^tilesetIdx^:0,^tileSymbol^:^э^},^3-113^:{^x^:3,^y^:113,^tilesetIdx^:0,^tileSymbol^:^ю^},^4-113^:{^x^:4,^y^:113,^tilesetIdx^:0,^tileSymbol^:^я^},^5-113^:{^x^:5,^y^:113,^tilesetIdx^:0,^tileSymbol^:^ѐ^},^6-113^:{^x^:6,^y^:113,^tilesetIdx^:0,^tileSymbol^:^ё^},^7-113^:{^x^:7,^y^:113,^tilesetIdx^:0,^tileSymbol^:^ђ^},^0-114^:{^x^:0,^y^:114,^tilesetIdx^:0,^tileSymbol^:^ѓ^},^1-114^:{^x^:1,^y^:114,^tilesetIdx^:0,^tileSymbol^:^є^},^2-114^:{^x^:2,^y^:114,^tilesetIdx^:0,^tileSymbol^:^ѕ^},^3-114^:{^x^:3,^y^:114,^tilesetIdx^:0,^tileSymbol^:^і^},^4-114^:{^x^:4,^y^:114,^tilesetIdx^:0,^tileSymbol^:^ї^},^5-114^:{^x^:5,^y^:114,^tilesetIdx^:0,^tileSymbol^:^ј^},^6-114^:{^x^:6,^y^:114,^tilesetIdx^:0,^tileSymbol^:^љ^},^7-114^:{^x^:7,^y^:114,^tilesetIdx^:0,^tileSymbol^:^њ^},^0-115^:{^x^:0,^y^:115,^tilesetIdx^:0,^tileSymbol^:^ћ^},^1-115^:{^x^:1,^y^:115,^tilesetIdx^:0,^tileSymbol^:^ќ^},^2-115^:{^x^:2,^y^:115,^tilesetIdx^:0,^tileSymbol^:^ѝ^},^3-115^:{^x^:3,^y^:115,^tilesetIdx^:0,^tileSymbol^:^ў^},^4-115^:{^x^:4,^y^:115,^tilesetIdx^:0,^tileSymbol^:^џ^},^5-115^:{^x^:5,^y^:115,^tilesetIdx^:0,^tileSymbol^:^Ѡ^},^6-115^:{^x^:6,^y^:115,^tilesetIdx^:0,^tileSymbol^:^ѡ^},^7-115^:{^x^:7,^y^:115,^tilesetIdx^:0,^tileSymbol^:^Ѣ^},^0-116^:{^x^:0,^y^:116,^tilesetIdx^:0,^tileSymbol^:^ѣ^},^1-116^:{^x^:1,^y^:116,^tilesetIdx^:0,^tileSymbol^:^Ѥ^},^2-116^:{^x^:2,^y^:116,^tilesetIdx^:0,^tileSymbol^:^ѥ^},^3-116^:{^x^:3,^y^:116,^tilesetIdx^:0,^tileSymbol^:^Ѧ^},^4-116^:{^x^:4,^y^:116,^tilesetIdx^:0,^tileSymbol^:^ѧ^},^5-116^:{^x^:5,^y^:116,^tilesetIdx^:0,^tileSymbol^:^Ѩ^},^6-116^:{^x^:6,^y^:116,^tilesetIdx^:0,^tileSymbol^:^ѩ^},^7-116^:{^x^:7,^y^:116,^tilesetIdx^:0,^tileSymbol^:^Ѫ^},^0-117^:{^x^:0,^y^:117,^tilesetIdx^:0,^tileSymbol^:^ѫ^},^1-117^:{^x^:1,^y^:117,^tilesetIdx^:0,^tileSymbol^:^Ѭ^},^2-117^:{^x^:2,^y^:117,^tilesetIdx^:0,^tileSymbol^:^ѭ^},^3-117^:{^x^:3,^y^:117,^tilesetIdx^:0,^tileSymbol^:^Ѯ^},^4-117^:{^x^:4,^y^:117,^tilesetIdx^:0,^tileSymbol^:^ѯ^},^5-117^:{^x^:5,^y^:117,^tilesetIdx^:0,^tileSymbol^:^Ѱ^},^6-117^:{^x^:6,^y^:117,^tilesetIdx^:0,^tileSymbol^:^ѱ^},^7-117^:{^x^:7,^y^:117,^tilesetIdx^:0,^tileSymbol^:^Ѳ^},^0-118^:{^x^:0,^y^:118,^tilesetIdx^:0,^tileSymbol^:^ѳ^},^1-118^:{^x^:1,^y^:118,^tilesetIdx^:0,^tileSymbol^:^Ѵ^},^2-118^:{^x^:2,^y^:118,^tilesetIdx^:0,^tileSymbol^:^ѵ^},^3-118^:{^x^:3,^y^:118,^tilesetIdx^:0,^tileSymbol^:^Ѷ^},^4-118^:{^x^:4,^y^:118,^tilesetIdx^:0,^tileSymbol^:^ѷ^},^5-118^:{^x^:5,^y^:118,^tilesetIdx^:0,^tileSymbol^:^Ѹ^},^6-118^:{^x^:6,^y^:118,^tilesetIdx^:0,^tileSymbol^:^ѹ^},^7-118^:{^x^:7,^y^:118,^tilesetIdx^:0,^tileSymbol^:^Ѻ^},^0-119^:{^x^:0,^y^:119,^tilesetIdx^:0,^tileSymbol^:^ѻ^},^1-119^:{^x^:1,^y^:119,^tilesetIdx^:0,^tileSymbol^:^Ѽ^},^2-119^:{^x^:2,^y^:119,^tilesetIdx^:0,^tileSymbol^:^ѽ^},^3-119^:{^x^:3,^y^:119,^tilesetIdx^:0,^tileSymbol^:^Ѿ^},^4-119^:{^x^:4,^y^:119,^tilesetIdx^:0,^tileSymbol^:^ѿ^},^5-119^:{^x^:5,^y^:119,^tilesetIdx^:0,^tileSymbol^:^Ҁ^},^6-119^:{^x^:6,^y^:119,^tilesetIdx^:0,^tileSymbol^:^ҁ^},^7-119^:{^x^:7,^y^:119,^tilesetIdx^:0,^tileSymbol^:^҂^},^0-120^:{^x^:0,^y^:120,^tilesetIdx^:0,^tileSymbol^:^҃^},^1-120^:{^x^:1,^y^:120,^tilesetIdx^:0,^tileSymbol^:^҄^},^2-120^:{^x^:2,^y^:120,^tilesetIdx^:0,^tileSymbol^:^҅^},^3-120^:{^x^:3,^y^:120,^tilesetIdx^:0,^tileSymbol^:^҆^},^4-120^:{^x^:4,^y^:120,^tilesetIdx^:0,^tileSymbol^:^҇^},^5-120^:{^x^:5,^y^:120,^tilesetIdx^:0,^tileSymbol^:^҈^},^6-120^:{^x^:6,^y^:120,^tilesetIdx^:0,^tileSymbol^:^҉^},^7-120^:{^x^:7,^y^:120,^tilesetIdx^:0,^tileSymbol^:^Ҋ^},^0-121^:{^x^:0,^y^:121,^tilesetIdx^:0,^tileSymbol^:^ҋ^},^1-121^:{^x^:1,^y^:121,^tilesetIdx^:0,^tileSymbol^:^Ҍ^},^2-121^:{^x^:2,^y^:121,^tilesetIdx^:0,^tileSymbol^:^ҍ^},^3-121^:{^x^:3,^y^:121,^tilesetIdx^:0,^tileSymbol^:^Ҏ^},^4-121^:{^x^:4,^y^:121,^tilesetIdx^:0,^tileSymbol^:^ҏ^},^5-121^:{^x^:5,^y^:121,^tilesetIdx^:0,^tileSymbol^:^Ґ^},^6-121^:{^x^:6,^y^:121,^tilesetIdx^:0,^tileSymbol^:^ґ^},^7-121^:{^x^:7,^y^:121,^tilesetIdx^:0,^tileSymbol^:^Ғ^},^0-122^:{^x^:0,^y^:122,^tilesetIdx^:0,^tileSymbol^:^ғ^},^1-122^:{^x^:1,^y^:122,^tilesetIdx^:0,^tileSymbol^:^Ҕ^},^2-122^:{^x^:2,^y^:122,^tilesetIdx^:0,^tileSymbol^:^ҕ^},^3-122^:{^x^:3,^y^:122,^tilesetIdx^:0,^tileSymbol^:^Җ^},^4-122^:{^x^:4,^y^:122,^tilesetIdx^:0,^tileSymbol^:^җ^},^5-122^:{^x^:5,^y^:122,^tilesetIdx^:0,^tileSymbol^:^Ҙ^},^6-122^:{^x^:6,^y^:122,^tilesetIdx^:0,^tileSymbol^:^ҙ^},^7-122^:{^x^:7,^y^:122,^tilesetIdx^:0,^tileSymbol^:^Қ^},^0-123^:{^x^:0,^y^:123,^tilesetIdx^:0,^tileSymbol^:^қ^},^1-123^:{^x^:1,^y^:123,^tilesetIdx^:0,^tileSymbol^:^Ҝ^},^2-123^:{^x^:2,^y^:123,^tilesetIdx^:0,^tileSymbol^:^ҝ^},^3-123^:{^x^:3,^y^:123,^tilesetIdx^:0,^tileSymbol^:^Ҟ^},^4-123^:{^x^:4,^y^:123,^tilesetIdx^:0,^tileSymbol^:^ҟ^},^5-123^:{^x^:5,^y^:123,^tilesetIdx^:0,^tileSymbol^:^Ҡ^},^6-123^:{^x^:6,^y^:123,^tilesetIdx^:0,^tileSymbol^:^ҡ^},^7-123^:{^x^:7,^y^:123,^tilesetIdx^:0,^tileSymbol^:^Ң^},^0-124^:{^x^:0,^y^:124,^tilesetIdx^:0,^tileSymbol^:^ң^},^1-124^:{^x^:1,^y^:124,^tilesetIdx^:0,^tileSymbol^:^Ҥ^},^2-124^:{^x^:2,^y^:124,^tilesetIdx^:0,^tileSymbol^:^ҥ^},^3-124^:{^x^:3,^y^:124,^tilesetIdx^:0,^tileSymbol^:^Ҧ^},^4-124^:{^x^:4,^y^:124,^tilesetIdx^:0,^tileSymbol^:^ҧ^},^5-124^:{^x^:5,^y^:124,^tilesetIdx^:0,^tileSymbol^:^Ҩ^},^6-124^:{^x^:6,^y^:124,^tilesetIdx^:0,^tileSymbol^:^ҩ^},^7-124^:{^x^:7,^y^:124,^tilesetIdx^:0,^tileSymbol^:^Ҫ^},^0-125^:{^x^:0,^y^:125,^tilesetIdx^:0,^tileSymbol^:^ҫ^},^1-125^:{^x^:1,^y^:125,^tilesetIdx^:0,^tileSymbol^:^Ҭ^},^2-125^:{^x^:2,^y^:125,^tilesetIdx^:0,^tileSymbol^:^ҭ^},^3-125^:{^x^:3,^y^:125,^tilesetIdx^:0,^tileSymbol^:^Ү^},^4-125^:{^x^:4,^y^:125,^tilesetIdx^:0,^tileSymbol^:^ү^},^5-125^:{^x^:5,^y^:125,^tilesetIdx^:0,^tileSymbol^:^Ұ^},^6-125^:{^x^:6,^y^:125,^tilesetIdx^:0,^tileSymbol^:^ұ^},^7-125^:{^x^:7,^y^:125,^tilesetIdx^:0,^tileSymbol^:^Ҳ^},^0-126^:{^x^:0,^y^:126,^tilesetIdx^:0,^tileSymbol^:^ҳ^},^1-126^:{^x^:1,^y^:126,^tilesetIdx^:0,^tileSymbol^:^Ҵ^},^2-126^:{^x^:2,^y^:126,^tilesetIdx^:0,^tileSymbol^:^ҵ^},^3-126^:{^x^:3,^y^:126,^tilesetIdx^:0,^tileSymbol^:^Ҷ^},^4-126^:{^x^:4,^y^:126,^tilesetIdx^:0,^tileSymbol^:^ҷ^},^5-126^:{^x^:5,^y^:126,^tilesetIdx^:0,^tileSymbol^:^Ҹ^},^6-126^:{^x^:6,^y^:126,^tilesetIdx^:0,^tileSymbol^:^ҹ^},^7-126^:{^x^:7,^y^:126,^tilesetIdx^:0,^tileSymbol^:^Һ^},^0-127^:{^x^:0,^y^:127,^tilesetIdx^:0,^tileSymbol^:^һ^},^1-127^:{^x^:1,^y^:127,^tilesetIdx^:0,^tileSymbol^:^Ҽ^},^2-127^:{^x^:2,^y^:127,^tilesetIdx^:0,^tileSymbol^:^ҽ^},^3-127^:{^x^:3,^y^:127,^tilesetIdx^:0,^tileSymbol^:^Ҿ^},^4-127^:{^x^:4,^y^:127,^tilesetIdx^:0,^tileSymbol^:^ҿ^},^5-127^:{^x^:5,^y^:127,^tilesetIdx^:0,^tileSymbol^:^Ӏ^},^6-127^:{^x^:6,^y^:127,^tilesetIdx^:0,^tileSymbol^:^Ӂ^},^7-127^:{^x^:7,^y^:127,^tilesetIdx^:0,^tileSymbol^:^ӂ^},^0-128^:{^x^:0,^y^:128,^tilesetIdx^:0,^tileSymbol^:^Ӄ^},^1-128^:{^x^:1,^y^:128,^tilesetIdx^:0,^tileSymbol^:^ӄ^},^2-128^:{^x^:2,^y^:128,^tilesetIdx^:0,^tileSymbol^:^Ӆ^},^3-128^:{^x^:3,^y^:128,^tilesetIdx^:0,^tileSymbol^:^ӆ^},^4-128^:{^x^:4,^y^:128,^tilesetIdx^:0,^tileSymbol^:^Ӈ^},^5-128^:{^x^:5,^y^:128,^tilesetIdx^:0,^tileSymbol^:^ӈ^},^6-128^:{^x^:6,^y^:128,^tilesetIdx^:0,^tileSymbol^:^Ӊ^},^7-128^:{^x^:7,^y^:128,^tilesetIdx^:0,^tileSymbol^:^ӊ^},^0-129^:{^x^:0,^y^:129,^tilesetIdx^:0,^tileSymbol^:^Ӌ^},^1-129^:{^x^:1,^y^:129,^tilesetIdx^:0,^tileSymbol^:^ӌ^},^2-129^:{^x^:2,^y^:129,^tilesetIdx^:0,^tileSymbol^:^Ӎ^},^3-129^:{^x^:3,^y^:129,^tilesetIdx^:0,^tileSymbol^:^ӎ^},^4-129^:{^x^:4,^y^:129,^tilesetIdx^:0,^tileSymbol^:^ӏ^},^5-129^:{^x^:5,^y^:129,^tilesetIdx^:0,^tileSymbol^:^Ӑ^},^6-129^:{^x^:6,^y^:129,^tilesetIdx^:0,^tileSymbol^:^ӑ^},^7-129^:{^x^:7,^y^:129,^tilesetIdx^:0,^tileSymbol^:^Ӓ^},^0-130^:{^x^:0,^y^:130,^tilesetIdx^:0,^tileSymbol^:^ӓ^},^1-130^:{^x^:1,^y^:130,^tilesetIdx^:0,^tileSymbol^:^Ӕ^},^2-130^:{^x^:2,^y^:130,^tilesetIdx^:0,^tileSymbol^:^ӕ^},^3-130^:{^x^:3,^y^:130,^tilesetIdx^:0,^tileSymbol^:^Ӗ^},^4-130^:{^x^:4,^y^:130,^tilesetIdx^:0,^tileSymbol^:^ӗ^},^5-130^:{^x^:5,^y^:130,^tilesetIdx^:0,^tileSymbol^:^Ә^},^6-130^:{^x^:6,^y^:130,^tilesetIdx^:0,^tileSymbol^:^ә^},^7-130^:{^x^:7,^y^:130,^tilesetIdx^:0,^tileSymbol^:^Ӛ^},^0-131^:{^x^:0,^y^:131,^tilesetIdx^:0,^tileSymbol^:^ӛ^},^1-131^:{^x^:1,^y^:131,^tilesetIdx^:0,^tileSymbol^:^Ӝ^},^2-131^:{^x^:2,^y^:131,^tilesetIdx^:0,^tileSymbol^:^ӝ^},^3-131^:{^x^:3,^y^:131,^tilesetIdx^:0,^tileSymbol^:^Ӟ^},^4-131^:{^x^:4,^y^:131,^tilesetIdx^:0,^tileSymbol^:^ӟ^},^5-131^:{^x^:5,^y^:131,^tilesetIdx^:0,^tileSymbol^:^Ӡ^},^6-131^:{^x^:6,^y^:131,^tilesetIdx^:0,^tileSymbol^:^ӡ^},^7-131^:{^x^:7,^y^:131,^tilesetIdx^:0,^tileSymbol^:^Ӣ^},^0-132^:{^x^:0,^y^:132,^tilesetIdx^:0,^tileSymbol^:^ӣ^},^1-132^:{^x^:1,^y^:132,^tilesetIdx^:0,^tileSymbol^:^Ӥ^},^2-132^:{^x^:2,^y^:132,^tilesetIdx^:0,^tileSymbol^:^ӥ^},^3-132^:{^x^:3,^y^:132,^tilesetIdx^:0,^tileSymbol^:^Ӧ^},^4-132^:{^x^:4,^y^:132,^tilesetIdx^:0,^tileSymbol^:^ӧ^},^5-132^:{^x^:5,^y^:132,^tilesetIdx^:0,^tileSymbol^:^Ө^},^6-132^:{^x^:6,^y^:132,^tilesetIdx^:0,^tileSymbol^:^ө^},^7-132^:{^x^:7,^y^:132,^tilesetIdx^:0,^tileSymbol^:^Ӫ^}},^symbolStartIdx^:30,^tileSize^:32,^tags^:{^solid()^:{^name^:^solid()^,^tiles^:{^3-3^:^O^,^4-1^:^O^,^5-1^:^O^,^5-2^:^O^,^4-2^:^O^,^7-7^:^O^,^7-8^:^O^,^3-8^:^O^,^4-8^:^O^,^6-1^:^O^,^7-2^:^O^,^6-2^:^O^,^7-1^:^O^,^3-1^:{^mark^:^O^},^2-1^:{^mark^:^O^},^2-2^:{^mark^:^O^},^3-2^:{^mark^:^O^},^6-5^:{^mark^:^O^},^7-5^:{^mark^:^O^}}}},^frames^:{^anim0^:{^frameCount^:3,^width^:2,^height^:2,^start^:{^x^:0,^y^:1,^tilesetIdx^:0,^tileSymbol^:^Ë^},^tiles^:[{^x^:0,^y^:1,^tilesetIdx^:0,^tileSymbol^:^Ë^},{^x^:0,^y^:2,^tilesetIdx^:0,^tileSymbol^:^Ó^},{^x^:1,^y^:1,^tilesetIdx^:0,^tileSymbol^:^Ì^},{^x^:1,^y^:2,^tilesetIdx^:0,^tileSymbol^:^Ô^}],^name^:^anim0^,^isFlippedX^:false,^xPos^:0,^yPos^:0},^anim2^:{^frameCount^:6,^width^:1,^height^:1,^start^:{^x^:0,^y^:6,^tilesetIdx^:0,^tileSymbol^:^ó^},^tiles^:[{^x^:0,^y^:6,^tilesetIdx^:0,^tileSymbol^:^ó^}],^name^:^anim2^,^isFlippedX^:false,^xPos^:0,^yPos^:0},^anim3^:{^frameCount^:1,^width^:2,^height^:1,^start^:{^x^:6,^y^:5,^tilesetIdx^:0,^tileSymbol^:^ñ^},^tiles^:[{^x^:6,^y^:5,^tilesetIdx^:0,^tileSymbol^:^ñ^},{^x^:7,^y^:5,^tilesetIdx^:0,^tileSymbol^:^ò^}],^name^:^anim3^,^isFlippedX^:false,^xPos^:0,^yPos^:0},^anim1^:{^frameCount^:2,^width^:2,^height^:2,^start^:{^x^:4,^y^:1,^tilesetIdx^:0,^tileSymbol^:^Ï^},^tiles^:[{^x^:4,^y^:1,^tilesetIdx^:0,^tileSymbol^:^Ï^},{^x^:4,^y^:2,^tilesetIdx^:0,^tileSymbol^:^×^},{^x^:5,^y^:1,^tilesetIdx^:0,^tileSymbol^:^Ð^},{^x^:5,^y^:2,^tilesetIdx^:0,^tileSymbol^:^Ø^}],^name^:^anim1^,^isFlippedX^:false,^xPos^:0,^yPos^:0}},^description^:^n/a^},^1^:{^src^:^https://blurymind.github.io/tilemap-editor/free.png^,^name^:^tileset 1^,^gridWidth^:5,^gridHeight^:6,^tileCount^:30,^tileData^:{^0-0^:{^x^:0,^y^:0,^tilesetIdx^:1,^tileSymbol^:^¥^},^1-0^:{^x^:1,^y^:0,^tilesetIdx^:1,^tileSymbol^:^¦^},^2-0^:{^x^:2,^y^:0,^tilesetIdx^:1,^tileSymbol^:^§^},^3-0^:{^x^:3,^y^:0,^tilesetIdx^:1,^tileSymbol^:^¨^},^4-0^:{^x^:4,^y^:0,^tilesetIdx^:1,^tileSymbol^:^©^},^0-1^:{^x^:0,^y^:1,^tilesetIdx^:1,^tileSymbol^:^ª^},^1-1^:{^x^:1,^y^:1,^tilesetIdx^:1,^tileSymbol^:^«^},^2-1^:{^x^:2,^y^:1,^tilesetIdx^:1,^tileSymbol^:^¬^},^3-1^:{^x^:3,^y^:1,^tilesetIdx^:1,^tileSymbol^:^­^},^4-1^:{^x^:4,^y^:1,^tilesetIdx^:1,^tileSymbol^:^®^},^0-2^:{^x^:0,^y^:2,^tilesetIdx^:1,^tileSymbol^:^¯^},^1-2^:{^x^:1,^y^:2,^tilesetIdx^:1,^tileSymbol^:^°^},^2-2^:{^x^:2,^y^:2,^tilesetIdx^:1,^tileSymbol^:^±^},^3-2^:{^x^:3,^y^:2,^tilesetIdx^:1,^tileSymbol^:^²^},^4-2^:{^x^:4,^y^:2,^tilesetIdx^:1,^tileSymbol^:^³^},^0-3^:{^x^:0,^y^:3,^tilesetIdx^:1,^tileSymbol^:^´^},^1-3^:{^x^:1,^y^:3,^tilesetIdx^:1,^tileSymbol^:^µ^},^2-3^:{^x^:2,^y^:3,^tilesetIdx^:1,^tileSymbol^:^¶^},^3-3^:{^x^:3,^y^:3,^tilesetIdx^:1,^tileSymbol^:^·^},^4-3^:{^x^:4,^y^:3,^tilesetIdx^:1,^tileSymbol^:^¸^},^0-4^:{^x^:0,^y^:4,^tilesetIdx^:1,^tileSymbol^:^¹^},^1-4^:{^x^:1,^y^:4,^tilesetIdx^:1,^tileSymbol^:^º^},^2-4^:{^x^:2,^y^:4,^tilesetIdx^:1,^tileSymbol^:^»^},^3-4^:{^x^:3,^y^:4,^tilesetIdx^:1,^tileSymbol^:^¼^},^4-4^:{^x^:4,^y^:4,^tilesetIdx^:1,^tileSymbol^:^½^},^0-5^:{^x^:0,^y^:5,^tilesetIdx^:1,^tileSymbol^:^¾^},^1-5^:{^x^:1,^y^:5,^tilesetIdx^:1,^tileSymbol^:^¿^},^2-5^:{^x^:2,^y^:5,^tilesetIdx^:1,^tileSymbol^:^À^},^3-5^:{^x^:3,^y^:5,^tilesetIdx^:1,^tileSymbol^:^Á^},^4-5^:{^x^:4,^y^:5,^tilesetIdx^:1,^tileSymbol^:^Â^}},^symbolStartIdx^:0,^tileSize^:32,^tags^:{},^frames^:{},^description^:^n/a^}},^maps^:{^Map_1^:{^layers^:[{^tiles^:{},^visible^:true,^name^:^bottom^},{^tiles^:{},^visible^:true,^name^:^middle^},{^tiles^:{^6-7^:{^x^:0,^y^:0,^tilesetIdx^:0,^tileSymbol^:^Ã^},^5-9^:{^x^:0,^y^:0,^tilesetIdx^:0,^tileSymbol^:^Ã^},^5-10^:{^x^:0,^y^:0,^tilesetIdx^:0,^tileSymbol^:^Ã^},^5-11^:{^x^:0,^y^:0,^tilesetIdx^:0,^tileSymbol^:^Ã^},^6-12^:{^x^:0,^y^:0,^tilesetIdx^:0,^tileSymbol^:^Ã^},^6-13^:{^x^:0,^y^:0,^tilesetIdx^:0,^tileSymbol^:^Ã^},^7-13^:{^x^:0,^y^:0,^tilesetIdx^:0,^tileSymbol^:^Ã^},^7-14^:{^x^:0,^y^:0,^tilesetIdx^:0,^tileSymbol^:^Ã^},^8-14^:{^x^:0,^y^:0,^tilesetIdx^:0,^tileSymbol^:^Ã^},^8-15^:{^x^:0,^y^:0,^tilesetIdx^:0,^tileSymbol^:^Ã^},^9-15^:{^x^:0,^y^:0,^tilesetIdx^:0,^tileSymbol^:^Ã^},^10-15^:{^x^:0,^y^:0,^tilesetIdx^:0,^tileSymbol^:^Ã^},^11-15^:{^x^:0,^y^:0,^tilesetIdx^:0,^tileSymbol^:^Ã^},^12-16^:{^x^:0,^y^:0,^tilesetIdx^:0,^tileSymbol^:^Ã^},^13-16^:{^x^:0,^y^:0,^tilesetIdx^:0,^tileSymbol^:^Ã^},^14-16^:{^x^:0,^y^:0,^tilesetIdx^:0,^tileSymbol^:^Ã^},^14-15^:{^x^:0,^y^:0,^tilesetIdx^:0,^tileSymbol^:^Ã^},^15-15^:{^x^:0,^y^:0,^tilesetIdx^:0,^tileSymbol^:^Ã^},^15-14^:{^x^:0,^y^:0,^tilesetIdx^:0,^tileSymbol^:^Ã^},^16-14^:{^x^:0,^y^:0,^tilesetIdx^:0,^tileSymbol^:^Ã^},^16-13^:{^x^:0,^y^:0,^tilesetIdx^:0,^tileSymbol^:^Ã^},^16-12^:{^x^:0,^y^:0,^tilesetIdx^:0,^tileSymbol^:^Ã^},^16-11^:{^x^:0,^y^:0,^tilesetIdx^:0,^tileSymbol^:^Ã^},^16-10^:{^x^:0,^y^:0,^tilesetIdx^:0,^tileSymbol^:^Ã^},^16-9^:{^x^:0,^y^:0,^tilesetIdx^:0,^tileSymbol^:^Ã^},^16-8^:{^x^:0,^y^:0,^tilesetIdx^:0,^tileSymbol^:^Ã^},^15-8^:{^x^:0,^y^:0,^tilesetIdx^:0,^tileSymbol^:^Ã^},^15-7^:{^x^:0,^y^:0,^tilesetIdx^:0,^tileSymbol^:^Ã^},^15-6^:{^x^:0,^y^:0,^tilesetIdx^:0,^tileSymbol^:^Ã^},^15-5^:{^x^:0,^y^:0,^tilesetIdx^:0,^tileSymbol^:^Ã^},^14-5^:{^x^:0,^y^:0,^tilesetIdx^:0,^tileSymbol^:^Ã^},^14-4^:{^x^:0,^y^:0,^tilesetIdx^:0,^tileSymbol^:^Ã^},^14-3^:{^x^:0,^y^:0,^tilesetIdx^:0,^tileSymbol^:^Ã^},^13-3^:{^x^:0,^y^:0,^tilesetIdx^:0,^tileSymbol^:^Ã^},^13-4^:{^x^:0,^y^:0,^tilesetIdx^:0,^tileSymbol^:^Ã^},^12-4^:{^x^:0,^y^:0,^tilesetIdx^:0,^tileSymbol^:^Ã^},^11-4^:{^x^:0,^y^:0,^tilesetIdx^:0,^tileSymbol^:^Ã^},^10-4^:{^x^:0,^y^:0,^tilesetIdx^:0,^tileSymbol^:^Ã^},^9-4^:{^x^:0,^y^:0,^tilesetIdx^:0,^tileSymbol^:^Ã^},^8-4^:{^x^:0,^y^:0,^tilesetIdx^:0,^tileSymbol^:^Ã^},^8-5^:{^x^:0,^y^:0,^tilesetIdx^:0,^tileSymbol^:^Ã^},^7-5^:{^x^:0,^y^:0,^tilesetIdx^:0,^tileSymbol^:^Ã^},^6-6^:{^x^:0,^y^:0,^tilesetIdx^:0,^tileSymbol^:^Ã^},^5-7^:{^x^:0,^y^:0,^tilesetIdx^:0,^tileSymbol^:^Ã^},^6-8^:{^x^:0,^y^:0,^tilesetIdx^:0,^tileSymbol^:^Ã^},^9-11^:{^x^:0,^y^:0,^tilesetIdx^:0,^tileSymbol^:^Ã^},^9-12^:{^x^:0,^y^:0,^tilesetIdx^:0,^tileSymbol^:^Ã^},^10-12^:{^x^:0,^y^:0,^tilesetIdx^:0,^tileSymbol^:^Ã^},^11-12^:{^x^:0,^y^:0,^tilesetIdx^:0,^tileSymbol^:^Ã^},^12-12^:{^x^:0,^y^:0,^tilesetIdx^:0,^tileSymbol^:^Ã^},^13-12^:{^x^:0,^y^:0,^tilesetIdx^:0,^tileSymbol^:^Ã^},^14-12^:{^x^:0,^y^:0,^tilesetIdx^:0,^tileSymbol^:^Ã^},^14-11^:{^x^:0,^y^:0,^tilesetIdx^:0,^tileSymbol^:^Ã^},^10-7^:{^x^:0,^y^:0,^tilesetIdx^:0,^tileSymbol^:^Ã^},^10-8^:{^x^:0,^y^:0,^tilesetIdx^:0,^tileSymbol^:^Ã^},^12-7^:{^x^:0,^y^:0,^tilesetIdx^:0,^tileSymbol^:^Ã^},^12-8^:{^x^:0,^y^:0,^tilesetIdx^:0,^tileSymbol^:^Ã^}},^visible^:true,^name^:^top^}],^name^:^Map 1^,^mapWidth^:18,^mapHeight^:17,^tileSize^:32,^width^:320,^height^:320},^Map_2^:{^layers^:[{^tiles^:{^0-0^:{^x^:1,^y^:0,^tilesetIdx^:0,^tileSymbol^:^Ä^},^1-0^:{^x^:1,^y^:0,^tilesetIdx^:0,^tileSymbol^:^Ä^},^2-0^:{^x^:1,^y^:0,^tilesetIdx^:0,^tileSymbol^:^Ä^},^3-0^:{^x^:1,^y^:0,^tilesetIdx^:0,^tileSymbol^:^Ä^},^4-0^:{^x^:1,^y^:0,^tilesetIdx^:0,^tileSymbol^:^Ä^},^5-0^:{^x^:1,^y^:0,^tilesetIdx^:0,^tileSymbol^:^Ä^},^6-0^:{^x^:1,^y^:0,^tilesetIdx^:0,^tileSymbol^:^Ä^},^0-1^:{^x^:1,^y^:0,^tilesetIdx^:0,^tileSymbol^:^Ä^},^1-1^:{^x^:1,^y^:0,^tilesetIdx^:0,^tileSymbol^:^Ä^},^2-1^:{^x^:1,^y^:0,^tilesetIdx^:0,^tileSymbol^:^Ä^},^3-1^:{^x^:1,^y^:0,^tilesetIdx^:0,^tileSymbol^:^Ä^},^4-1^:{^x^:1,^y^:0,^tilesetIdx^:0,^tileSymbol^:^Ä^},^5-1^:{^x^:1,^y^:0,^tilesetIdx^:0,^tileSymbol^:^Ä^},^6-1^:{^x^:1,^y^:0,^tilesetIdx^:0,^tileSymbol^:^Ä^},^0-2^:{^x^:1,^y^:0,^tilesetIdx^:0,^tileSymbol^:^Ä^},^1-2^:{^x^:1,^y^:0,^tilesetIdx^:0,^tileSymbol^:^Ä^},^2-2^:{^x^:1,^y^:0,^tilesetIdx^:0,^tileSymbol^:^Ä^},^3-2^:{^x^:1,^y^:0,^tilesetIdx^:0,^tileSymbol^:^Ä^},^4-2^:{^x^:1,^y^:0,^tilesetIdx^:0,^tileSymbol^:^Ä^},^5-2^:{^x^:1,^y^:0,^tilesetIdx^:0,^tileSymbol^:^Ä^},^6-2^:{^x^:1,^y^:0,^tilesetIdx^:0,^tileSymbol^:^Ä^},^0-3^:{^x^:1,^y^:0,^tilesetIdx^:0,^tileSymbol^:^Ä^},^1-3^:{^x^:1,^y^:0,^tilesetIdx^:0,^tileSymbol^:^Ä^},^2-3^:{^x^:1,^y^:0,^tilesetIdx^:0,^tileSymbol^:^Ä^},^3-3^:{^x^:1,^y^:0,^tilesetIdx^:0,^tileSymbol^:^Ä^},^4-3^:{^x^:1,^y^:0,^tilesetIdx^:0,^tileSymbol^:^Ä^},^5-3^:{^x^:1,^y^:0,^tilesetIdx^:0,^tileSymbol^:^Ä^},^6-3^:{^x^:1,^y^:0,^tilesetIdx^:0,^tileSymbol^:^Ä^},^0-4^:{^x^:1,^y^:0,^tilesetIdx^:0,^tileSymbol^:^Ä^},^1-4^:{^x^:1,^y^:0,^tilesetIdx^:0,^tileSymbol^:^Ä^},^2-4^:{^x^:1,^y^:0,^tilesetIdx^:0,^tileSymbol^:^Ä^},^3-4^:{^x^:1,^y^:0,^tilesetIdx^:0,^tileSymbol^:^Ä^},^4-4^:{^x^:1,^y^:0,^tilesetIdx^:0,^tileSymbol^:^Ä^},^5-4^:{^x^:1,^y^:0,^tilesetIdx^:0,^tileSymbol^:^Ä^},^6-4^:{^x^:1,^y^:0,^tilesetIdx^:0,^tileSymbol^:^Ä^},^0-5^:{^x^:1,^y^:0,^tilesetIdx^:0,^tileSymbol^:^Ä^},^1-5^:{^x^:1,^y^:0,^tilesetIdx^:0,^tileSymbol^:^Ä^},^2-5^:{^x^:1,^y^:0,^tilesetIdx^:0,^tileSymbol^:^Ä^},^3-5^:{^x^:1,^y^:0,^tilesetIdx^:0,^tileSymbol^:^Ä^},^4-5^:{^x^:1,^y^:0,^tilesetIdx^:0,^tileSymbol^:^Ä^},^5-5^:{^x^:1,^y^:0,^tilesetIdx^:0,^tileSymbol^:^Ä^},^6-5^:{^x^:1,^y^:0,^tilesetIdx^:0,^tileSymbol^:^Ä^},^0-6^:{^x^:1,^y^:0,^tilesetIdx^:0,^tileSymbol^:^Ä^},^1-6^:{^x^:1,^y^:0,^tilesetIdx^:0,^tileSymbol^:^Ä^},^2-6^:{^x^:1,^y^:0,^tilesetIdx^:0,^tileSymbol^:^Ä^},^3-6^:{^x^:1,^y^:0,^tilesetIdx^:0,^tileSymbol^:^Ä^},^4-6^:{^x^:1,^y^:0,^tilesetIdx^:0,^tileSymbol^:^Ä^},^5-6^:{^x^:1,^y^:0,^tilesetIdx^:0,^tileSymbol^:^Ä^},^6-6^:{^x^:1,^y^:0,^tilesetIdx^:0,^tileSymbol^:^Ä^},^0-7^:{^x^:1,^y^:0,^tilesetIdx^:0,^tileSymbol^:^Ä^},^1-7^:{^x^:1,^y^:0,^tilesetIdx^:0,^tileSymbol^:^Ä^},^2-7^:{^x^:1,^y^:0,^tilesetIdx^:0,^tileSymbol^:^Ä^},^3-7^:{^x^:1,^y^:0,^tilesetIdx^:0,^tileSymbol^:^Ä^},^4-7^:{^x^:1,^y^:0,^tilesetIdx^:0,^tileSymbol^:^Ä^},^5-7^:{^x^:1,^y^:0,^tilesetIdx^:0,^tileSymbol^:^Ä^},^6-7^:{^x^:1,^y^:0,^tilesetIdx^:0,^tileSymbol^:^Ä^},^0-8^:{^x^:1,^y^:0,^tilesetIdx^:0,^tileSymbol^:^Ä^},^1-8^:{^x^:1,^y^:0,^tilesetIdx^:0,^tileSymbol^:^Ä^},^2-8^:{^x^:1,^y^:0,^tilesetIdx^:0,^tileSymbol^:^Ä^},^3-8^:{^x^:1,^y^:0,^tilesetIdx^:0,^tileSymbol^:^Ä^},^4-8^:{^x^:1,^y^:0,^tilesetIdx^:0,^tileSymbol^:^Ä^},^5-8^:{^x^:1,^y^:0,^tilesetIdx^:0,^tileSymbol^:^Ä^},^6-8^:{^x^:1,^y^:0,^tilesetIdx^:0,^tileSymbol^:^Ä^},^0-9^:{^x^:1,^y^:0,^tilesetIdx^:0,^tileSymbol^:^Ä^},^1-9^:{^x^:1,^y^:0,^tilesetIdx^:0,^tileSymbol^:^Ä^},^2-9^:{^x^:1,^y^:0,^tilesetIdx^:0,^tileSymbol^:^Ä^},^3-9^:{^x^:1,^y^:0,^tilesetIdx^:0,^tileSymbol^:^Ä^},^4-9^:{^x^:1,^y^:0,^tilesetIdx^:0,^tileSymbol^:^Ä^},^5-9^:{^x^:1,^y^:0,^tilesetIdx^:0,^tileSymbol^:^Ä^},^6-9^:{^x^:1,^y^:0,^tilesetIdx^:0,^tileSymbol^:^Ä^},^0-10^:{^x^:1,^y^:0,^tilesetIdx^:0,^tileSymbol^:^Ä^},^1-10^:{^x^:1,^y^:0,^tilesetIdx^:0,^tileSymbol^:^Ä^},^2-10^:{^x^:1,^y^:0,^tilesetIdx^:0,^tileSymbol^:^Ä^},^3-10^:{^x^:1,^y^:0,^tilesetIdx^:0,^tileSymbol^:^Ä^},^4-10^:{^x^:1,^y^:0,^tilesetIdx^:0,^tileSymbol^:^Ä^},^5-10^:{^x^:1,^y^:0,^tilesetIdx^:0,^tileSymbol^:^Ä^},^6-10^:{^x^:1,^y^:0,^tilesetIdx^:0,^tileSymbol^:^Ä^},^0-11^:{^x^:1,^y^:0,^tilesetIdx^:0,^tileSymbol^:^Ä^},^1-11^:{^x^:1,^y^:0,^tilesetIdx^:0,^tileSymbol^:^Ä^},^2-11^:{^x^:1,^y^:0,^tilesetIdx^:0,^tileSymbol^:^Ä^},^3-11^:{^x^:1,^y^:0,^tilesetIdx^:0,^tileSymbol^:^Ä^},^4-11^:{^x^:1,^y^:0,^tilesetIdx^:0,^tileSymbol^:^Ä^},^5-11^:{^x^:1,^y^:0,^tilesetIdx^:0,^tileSymbol^:^Ä^},^6-11^:{^x^:1,^y^:0,^tilesetIdx^:0,^tileSymbol^:^Ä^},^0-12^:{^x^:1,^y^:0,^tilesetIdx^:0,^tileSymbol^:^Ä^},^1-12^:{^x^:1,^y^:0,^tilesetIdx^:0,^tileSymbol^:^Ä^},^2-12^:{^x^:1,^y^:0,^tilesetIdx^:0,^tileSymbol^:^Ä^},^3-12^:{^x^:1,^y^:0,^tilesetIdx^:0,^tileSymbol^:^Ä^},^4-12^:{^x^:1,^y^:0,^tilesetIdx^:0,^tileSymbol^:^Ä^},^5-12^:{^x^:1,^y^:0,^tilesetIdx^:0,^tileSymbol^:^Ä^},^6-12^:{^x^:1,^y^:0,^tilesetIdx^:0,^tileSymbol^:^Ä^},^0-13^:{^x^:1,^y^:0,^tilesetIdx^:0,^tileSymbol^:^Ä^},^1-13^:{^x^:1,^y^:0,^tilesetIdx^:0,^tileSymbol^:^Ä^},^2-13^:{^x^:1,^y^:0,^tilesetIdx^:0,^tileSymbol^:^Ä^},^3-13^:{^x^:1,^y^:0,^tilesetIdx^:0,^tileSymbol^:^Ä^},^4-13^:{^x^:1,^y^:0,^tilesetIdx^:0,^tileSymbol^:^Ä^},^5-13^:{^x^:1,^y^:0,^tilesetIdx^:0,^tileSymbol^:^Ä^},^6-13^:{^x^:1,^y^:0,^tilesetIdx^:0,^tileSymbol^:^Ä^},^0-14^:{^x^:1,^y^:0,^tilesetIdx^:0,^tileSymbol^:^Ä^},^1-14^:{^x^:1,^y^:0,^tilesetIdx^:0,^tileSymbol^:^Ä^},^2-14^:{^x^:1,^y^:0,^tilesetIdx^:0,^tileSymbol^:^Ä^},^3-14^:{^x^:1,^y^:0,^tilesetIdx^:0,^tileSymbol^:^Ä^},^4-14^:{^x^:1,^y^:0,^tilesetIdx^:0,^tileSymbol^:^Ä^},^5-14^:{^x^:1,^y^:0,^tilesetIdx^:0,^tileSymbol^:^Ä^},^6-14^:{^x^:1,^y^:0,^tilesetIdx^:0,^tileSymbol^:^Ä^},^0-15^:{^x^:1,^y^:0,^tilesetIdx^:0,^tileSymbol^:^Ä^},^1-15^:{^x^:1,^y^:0,^tilesetIdx^:0,^tileSymbol^:^Ä^,^isFlippedX^:false},^2-15^:{^x^:1,^y^:0,^tilesetIdx^:0,^tileSymbol^:^Ä^},^3-15^:{^x^:1,^y^:0,^tilesetIdx^:0,^tileSymbol^:^Ä^},^4-15^:{^x^:1,^y^:0,^tilesetIdx^:0,^tileSymbol^:^Ä^},^5-15^:{^x^:1,^y^:0,^tilesetIdx^:0,^tileSymbol^:^Ä^},^6-15^:{^x^:1,^y^:0,^tilesetIdx^:0,^tileSymbol^:^Ä^},^0-16^:{^x^:1,^y^:0,^tilesetIdx^:0,^tileSymbol^:^Ä^},^2-16^:{^x^:1,^y^:0,^tilesetIdx^:0,^tileSymbol^:^Ä^},^3-16^:{^x^:1,^y^:0,^tilesetIdx^:0,^tileSymbol^:^Ä^},^4-16^:{^x^:1,^y^:0,^tilesetIdx^:0,^tileSymbol^:^Ä^},^5-16^:{^x^:1,^y^:0,^tilesetIdx^:0,^tileSymbol^:^Ä^},^6-16^:{^x^:1,^y^:0,^tilesetIdx^:0,^tileSymbol^:^Ä^},^0-17^:{^x^:1,^y^:0,^tilesetIdx^:0,^tileSymbol^:^Ä^},^3-17^:{^x^:1,^y^:0,^tilesetIdx^:0,^tileSymbol^:^Ä^},^4-17^:{^x^:1,^y^:0,^tilesetIdx^:0,^tileSymbol^:^Ä^},^5-17^:{^x^:1,^y^:0,^tilesetIdx^:0,^tileSymbol^:^Ä^},^6-17^:{^x^:1,^y^:0,^tilesetIdx^:0,^tileSymbol^:^Ä^},^0-18^:{^x^:1,^y^:0,^tilesetIdx^:0,^tileSymbol^:^Ä^},^3-18^:{^x^:1,^y^:0,^tilesetIdx^:0,^tileSymbol^:^Ä^},^4-18^:{^x^:1,^y^:0,^tilesetIdx^:0,^tileSymbol^:^Ä^},^5-18^:{^x^:1,^y^:0,^tilesetIdx^:0,^tileSymbol^:^Ä^},^6-18^:{^x^:1,^y^:0,^tilesetIdx^:0,^tileSymbol^:^Ä^},^0-19^:{^x^:1,^y^:0,^tilesetIdx^:0,^tileSymbol^:^Ä^},^2-19^:{^x^:1,^y^:0,^tilesetIdx^:0,^tileSymbol^:^Ä^,^isFlippedX^:false},^3-19^:{^x^:1,^y^:0,^tilesetIdx^:0,^tileSymbol^:^Ä^},^4-19^:{^x^:1,^y^:0,^tilesetIdx^:0,^tileSymbol^:^Ä^},^5-19^:{^x^:1,^y^:0,^tilesetIdx^:0,^tileSymbol^:^Ä^},^6-19^:{^x^:1,^y^:0,^tilesetIdx^:0,^tileSymbol^:^Ä^},^0-20^:{^x^:1,^y^:0,^tilesetIdx^:0,^tileSymbol^:^Ä^},^1-20^:{^x^:1,^y^:0,^tilesetIdx^:0,^tileSymbol^:^Ä^},^2-20^:{^x^:1,^y^:0,^tilesetIdx^:0,^tileSymbol^:^Ä^},^3-20^:{^x^:1,^y^:0,^tilesetIdx^:0,^tileSymbol^:^Ä^},^4-20^:{^x^:1,^y^:0,^tilesetIdx^:0,^tileSymbol^:^Ä^},^5-20^:{^x^:1,^y^:0,^tilesetIdx^:0,^tileSymbol^:^Ä^},^6-20^:{^x^:1,^y^:0,^tilesetIdx^:0,^tileSymbol^:^Ä^},^0-21^:{^x^:1,^y^:0,^tilesetIdx^:0,^tileSymbol^:^Ä^},^1-21^:{^x^:1,^y^:0,^tilesetIdx^:0,^tileSymbol^:^Ä^},^2-21^:{^x^:1,^y^:0,^tilesetIdx^:0,^tileSymbol^:^Ä^},^3-21^:{^x^:1,^y^:0,^tilesetIdx^:0,^tileSymbol^:^Ä^},^4-21^:{^x^:1,^y^:0,^tilesetIdx^:0,^tileSymbol^:^Ä^},^5-21^:{^x^:1,^y^:0,^tilesetIdx^:0,^tileSymbol^:^Ä^},^6-21^:{^x^:1,^y^:0,^tilesetIdx^:0,^tileSymbol^:^Ä^},^1-16^:{^x^:1,^y^:0,^tilesetIdx^:0,^tileSymbol^:^Ä^,^isFlippedX^:false},^1-17^:{^x^:1,^y^:0,^tilesetIdx^:0,^tileSymbol^:^Ä^,^isFlippedX^:false},^1-18^:{^x^:1,^y^:0,^tilesetIdx^:0,^tileSymbol^:^Ä^,^isFlippedX^:false},^2-18^:{^x^:1,^y^:0,^tilesetIdx^:0,^tileSymbol^:^Ä^,^isFlippedX^:false},^2-17^:{^x^:1,^y^:0,^tilesetIdx^:0,^tileSymbol^:^Ä^,^isFlippedX^:false},^1-19^:{^x^:1,^y^:0,^tilesetIdx^:0,^tileSymbol^:^Ä^,^isFlippedX^:false}},^visible^:true,^name^:^bottom^,^animatedTiles^:{^3-1^:{^frameCount^:2,^width^:2,^height^:2,^start^:{^x^:4,^y^:1,^tilesetIdx^:0,^tileSymbol^:^Ï^},^tiles^:[{^x^:4,^y^:1,^tilesetIdx^:0,^tileSymbol^:^Ï^},{^x^:4,^y^:2,^tilesetIdx^:0,^tileSymbol^:^×^},{^x^:5,^y^:1,^tilesetIdx^:0,^tileSymbol^:^Ð^},{^x^:5,^y^:2,^tilesetIdx^:0,^tileSymbol^:^Ø^}],^name^:^anim1^,^layer^:0,^isFlippedX^:false,^xPos^:96,^yPos^:32}}},{^tiles^:{^2-6^:{^x^:3,^y^:0,^tilesetIdx^:0,^tileSymbol^:^Æ^},^2-7^:{^x^:3,^y^:0,^tilesetIdx^:0,^tileSymbol^:^Æ^},^1-7^:{^x^:3,^y^:0,^tilesetIdx^:0,^tileSymbol^:^Æ^},^1-8^:{^x^:3,^y^:0,^tilesetIdx^:0,^tileSymbol^:^Æ^},^1-9^:{^x^:3,^y^:0,^tilesetIdx^:0,^tileSymbol^:^Æ^},^1-10^:{^x^:3,^y^:0,^tilesetIdx^:0,^tileSymbol^:^Æ^},^1-11^:{^x^:3,^y^:0,^tilesetIdx^:0,^tileSymbol^:^Æ^},^1-12^:{^x^:3,^y^:0,^tilesetIdx^:0,^tileSymbol^:^Æ^},^2-12^:{^x^:3,^y^:0,^tilesetIdx^:0,^tileSymbol^:^Æ^},^2-13^:{^x^:3,^y^:0,^tilesetIdx^:0,^tileSymbol^:^Æ^},^3-13^:{^x^:3,^y^:0,^tilesetIdx^:0,^tileSymbol^:^Æ^},^3-12^:{^x^:3,^y^:0,^tilesetIdx^:0,^tileSymbol^:^Æ^},^4-12^:{^x^:3,^y^:0,^tilesetIdx^:0,^tileSymbol^:^Æ^},^5-11^:{^x^:3,^y^:0,^tilesetIdx^:0,^tileSymbol^:^Æ^},^5-10^:{^x^:3,^y^:0,^tilesetIdx^:0,^tileSymbol^:^Æ^},^6-10^:{^x^:3,^y^:0,^tilesetIdx^:0,^tileSymbol^:^Æ^},^6-9^:{^x^:3,^y^:0,^tilesetIdx^:0,^tileSymbol^:^Æ^},^6-8^:{^x^:3,^y^:0,^tilesetIdx^:0,^tileSymbol^:^Æ^},^5-8^:{^x^:3,^y^:0,^tilesetIdx^:0,^tileSymbol^:^Æ^},^5-7^:{^x^:3,^y^:0,^tilesetIdx^:0,^tileSymbol^:^Æ^},^5-6^:{^x^:3,^y^:0,^tilesetIdx^:0,^tileSymbol^:^Æ^},^4-6^:{^x^:3,^y^:0,^tilesetIdx^:0,^tileSymbol^:^Æ^},^4-5^:{^x^:3,^y^:0,^tilesetIdx^:0,^tileSymbol^:^Æ^},^3-5^:{^x^:3,^y^:0,^tilesetIdx^:0,^tileSymbol^:^Æ^},^3-6^:{^x^:3,^y^:0,^tilesetIdx^:0,^tileSymbol^:^Æ^},^3-11^:{^x^:3,^y^:0,^tilesetIdx^:0,^tileSymbol^:^Æ^},^3-10^:{^x^:3,^y^:0,^tilesetIdx^:0,^tileSymbol^:^Æ^},^4-10^:{^x^:3,^y^:0,^tilesetIdx^:0,^tileSymbol^:^Æ^},^4-9^:{^x^:3,^y^:0,^tilesetIdx^:0,^tileSymbol^:^Æ^},^4-8^:{^x^:3,^y^:0,^tilesetIdx^:0,^tileSymbol^:^Æ^},^3-8^:{^x^:3,^y^:0,^tilesetIdx^:0,^tileSymbol^:^Æ^},^3-9^:{^x^:3,^y^:0,^tilesetIdx^:0,^tileSymbol^:^Æ^},^2-9^:{^x^:3,^y^:0,^tilesetIdx^:0,^tileSymbol^:^Æ^},^2-8^:{^x^:3,^y^:0,^tilesetIdx^:0,^tileSymbol^:^Æ^},^2-10^:{^x^:3,^y^:0,^tilesetIdx^:0,^tileSymbol^:^Æ^},^2-11^:{^x^:3,^y^:0,^tilesetIdx^:0,^tileSymbol^:^Æ^},^4-11^:{^x^:3,^y^:0,^tilesetIdx^:0,^tileSymbol^:^Æ^},^5-9^:{^x^:3,^y^:0,^tilesetIdx^:0,^tileSymbol^:^Æ^},^4-7^:{^x^:3,^y^:0,^tilesetIdx^:0,^tileSymbol^:^Æ^},^3-7^:{^x^:3,^y^:0,^tilesetIdx^:0,^tileSymbol^:^Æ^},^4-16^:{^x^:6,^y^:1,^tilesetIdx^:0,^tileSymbol^:^Ñ^,^isFlippedX^:false},^4-17^:{^x^:6,^y^:2,^tilesetIdx^:0,^tileSymbol^:^Ù^,^isFlippedX^:false},^5-16^:{^x^:7,^y^:1,^tilesetIdx^:0,^tileSymbol^:^Ò^,^isFlippedX^:false},^5-17^:{^x^:7,^y^:2,^tilesetIdx^:0,^tileSymbol^:^Ú^,^isFlippedX^:false}},^visible^:true,^name^:^middle^,^opacity^:0.54},{^tiles^:{},^visible^:true,^name^:^top^,^animatedTiles^:{^1-7^:{^frameCount^:3,^width^:2,^height^:2,^start^:{^x^:0,^y^:1,^tilesetIdx^:0,^tileSymbol^:^Ë^},^tiles^:[{^x^:0,^y^:1,^tilesetIdx^:0,^tileSymbol^:^Ë^},{^x^:0,^y^:2,^tilesetIdx^:0,^tileSymbol^:^Ó^},{^x^:1,^y^:1,^tilesetIdx^:0,^tileSymbol^:^Ì^},{^x^:1,^y^:2,^tilesetIdx^:0,^tileSymbol^:^Ô^}],^name^:^anim0^,^layer^:2,^isFlippedX^:false,^xPos^:32,^yPos^:224},^4-12^:{^frameCount^:3,^width^:2,^height^:2,^start^:{^x^:0,^y^:1,^tilesetIdx^:0,^tileSymbol^:^Ë^},^tiles^:[{^x^:0,^y^:1,^tilesetIdx^:0,^tileSymbol^:^Ë^},{^x^:0,^y^:2,^tilesetIdx^:0,^tileSymbol^:^Ó^},{^x^:1,^y^:1,^tilesetIdx^:0,^tileSymbol^:^Ì^},{^x^:1,^y^:2,^tilesetIdx^:0,^tileSymbol^:^Ô^}],^name^:^anim0^,^layer^:2,^isFlippedX^:true,^xPos^:128,^yPos^:384},^1-3^:{^frameCount^:3,^width^:1,^height^:1,^start^:{^x^:0,^y^:6,^tilesetIdx^:0,^tileSymbol^:^ó^},^tiles^:[{^x^:0,^y^:6,^tilesetIdx^:0,^tileSymbol^:^ó^}],^name^:^anim2^,^layer^:2,^isFlippedX^:true,^xPos^:32,^yPos^:96},^5-5^:{^frameCount^:6,^width^:1,^height^:1,^start^:{^x^:0,^y^:6,^tilesetIdx^:0,^tileSymbol^:^ó^},^tiles^:[{^x^:0,^y^:6,^tilesetIdx^:0,^tileSymbol^:^ó^}],^name^:^anim2^,^layer^:2,^isFlippedX^:true,^xPos^:160,^yPos^:160},^3-10^:{^frameCount^:1,^width^:2,^height^:1,^start^:{^x^:6,^y^:5,^tilesetIdx^:0,^tileSymbol^:^ñ^},^tiles^:[{^x^:6,^y^:5,^tilesetIdx^:0,^tileSymbol^:^ñ^},{^x^:7,^y^:5,^tilesetIdx^:0,^tileSymbol^:^ò^}],^name^:^anim3^,^layer^:2,^isFlippedX^:true,^xPos^:96,^yPos^:320},^4-7^:{^frameCount^:1,^width^:2,^height^:1,^start^:{^x^:6,^y^:5,^tilesetIdx^:0,^tileSymbol^:^ñ^},^tiles^:[{^x^:6,^y^:5,^tilesetIdx^:0,^tileSymbol^:^ñ^},{^x^:7,^y^:5,^tilesetIdx^:0,^tileSymbol^:^ò^}],^name^:^anim3^,^layer^:2,^isFlippedX^:false,^xPos^:128,^yPos^:224}},^opacity^:1}],^name^:^Map 2^,^mapWidth^:7,^mapHeight^:22,^tileSize^:32,^width^:320,^height^:320}}};
      // kaboomJs example exporter
      const kaboomJsExport = ({flattenedData, maps, tileSets, activeMap, downloadAsTextFile}) =>{
        const getTileData = (tileSet, tileSetIdx) => Array.from({length: tileSet.tileCount}, (x, i) => i).map(tile=>{
          const x = tile % tileSet.gridWidth;
          const y = Math.floor(tile / tileSet.gridWidth);
          const tileKey = @~{x}-~{y}@;
      
          const tags = Object.keys(tileSet.tags).filter(tagKey => !!tileSet.tags[tagKey]?.tiles[tileKey]);
          return @^~{tileSet.tileData[tileKey]?.tileSymbol}^: [
            sprite(^tileset-~{tileSetIdx}^, { frame: ~{tile}, }),
            ~{tags?.join(^,^)|| ^^}
          ],@
        }).join(^\\n^)
      
        const getAsciiMap = (flattenedDataLayer) => @\\n~{flattenedDataLayer.map((row,rowIndex) => ^'^ + row.map(tile => tile.tileSymbol).join(^^)).join(^',\\n^) + ^'^}@;
      
      
      
        console.log(^TILESETS^, tileSets, flattenedData)
        const kaboomBoiler = @
        kaboom({
          global: true,
          fullscreen: true,
          scale: 1,
          debug: true,
          clearColor: [0, 0, 0, 1],
        });
      
        // Load assets
        ~{Object.values(tileSets).map((tileSet, tileSetIdx) => @
              loadSprite(^tileset-~{tileSetIdx}^, ^~{tileSet.src}^, {
              sliceX: ~{tileSet.gridWidth},
              sliceY: ~{tileSet.gridHeight},
          });
        @).join(^\\n^)}
      
      
        scene(^main^, () => {
        // tileset
          ~{Object.values(tileSets).map((tileSet, tileSetIdx) => @
              const tileset_~{tileSetIdx}_data = {
              width: ~{tileSet.tileSize},
              height: ~{tileSet.tileSize},
              pos: vec2(0, 0),
                ~{getTileData(tileSet, tileSetIdx)}
                };
          @).join(^\\n^)}
        // maps
        ~{flattenedData.map((map, index)=>@
          const map_~{index} = [~{getAsciiMap(map.flattenedData[map.flattenedData.length - 1])}];
        @).join(^\\n^)}
      
        addLevel(map_0, tileset_0_data);
        })
      
        start(^main^);
        @;
        console.log(kaboomBoiler)
        // return the transformed data in the end
        return kaboomBoiler
      };
      
      //Get imgur gallery from an id  -- example: SjjsjTm
      const getImgurGallery = (album_id, cb) =>{
        const api_key = ^a85ae3a537d345f^
        const request_url = ^https://api.imgur.com/3/album/^ + album_id;
        const requestAlbum = () => {
          const req = new XMLHttpRequest();
          req.onreadystatechange = function() {
            if (req.readyState == 4 && req.status == 200) {
              processRequest(req.responseText);
            } else {
              console.log(^Error with Imgur Request.^);
            }
          }
          req.open(^GET^, request_url, true); // true for asynchronous
          req.setRequestHeader(^Authorization^, ^Client-ID ^ + api_key);
          req.send(null);
        }
        const processRequest = (response_text) => {
          if (response_text == ^Not found^) {
            console.log(^Imgur album not found.^);
          } else {
            const json = JSON.parse(response_text);
            console.log(^Got images from imgur^, json)
            cb(json.data)
          }
        }
        requestAlbum();
      }
      
      // upload to imgur, then return the src
      const uploadImageToImgur = (blob) => {
        const formData = new FormData();
        formData.append('type', 'file');
        formData.append('image', blob);
        return fetch('https://api.imgur.com/3/upload.json', {
          method: 'POST',
          headers: {
            Accept: 'application/json',
            Authorization: 'Client-ID 1bddacd2afe5039'// imgur specific
          },
          body: formData
        }).then(response =>{
                  if (response.status === 200 || response.status === 0) return Promise.resolve(response);
                  return Promise.reject(new Error(^Error loading image^))
                }).then(response=>response.json())
      };
      
      const getMapFromGist = (gistId, cb) => {
        console.log(^Trying to get gist^, @https://api.github.com/gists/=~{gistId}@)
        fetch(@https://api.github.com/gists/~{gistId}@).then(blob => blob.json())
        .then(data => {
          let mapFound
          Object.entries(data.files).forEach(([key,val])=>{
            if(!mapFound && key.endsWith(^.json^)){
              fetch(val.raw_url).then(blob => blob.json()).then(jsonData=>{
                mapFound = jsonData;
                console.log(^Got map!^, mapFound)
                cb(mapFound)
              })
            }
          })
        });
      }
      
      let tileSetImages = [
        {
          src:^https://i.imgur.com/ztwPZOI.png^,
          name: ^demo tileset^,
          tileSize: 32,
          link: ^https://google.com^,
          description: @Demo tileset with a very very very very long description that can't barely fit there.
                  Still the author decided he has lots to say about the thing and even include a link@
        },
        {
          src: ^https://blurymind.github.io/tilemap-editor/free.png^
        }
      ];
      let tileSize = 32;
      let mapWidth = 10;
      let mapHeight = 10;
      let tileMapData  = {^maps^:{^Map_1^:{^name^:^Map 1^,^width^:320,^height^:320,^layers^:[{^name^:^base^,^tiles^:{^0-0^:{^x^:0,^y^:0,^isFlippedX^:false,^tileSymbol^:^¥^,^tilesetIdx^:^0^},^0-1^:{^x^:0,^y^:0,^isFlippedX^:false,^tileSymbol^:^¥^,^tilesetIdx^:^0^},^0-2^:{^x^:0,^y^:0,^isFlippedX^:false,^tileSymbol^:^¥^,^tilesetIdx^:^0^},^0-3^:{^x^:0,^y^:0,^isFlippedX^:false,^tileSymbol^:^¥^,^tilesetIdx^:^0^},^0-4^:{^x^:0,^y^:0,^isFlippedX^:false,^tileSymbol^:^¥^,^tilesetIdx^:^0^},^0-5^:{^x^:0,^y^:0,^isFlippedX^:false,^tileSymbol^:^¥^,^tilesetIdx^:^0^},^0-6^:{^x^:0,^y^:0,^isFlippedX^:false,^tileSymbol^:^¥^,^tilesetIdx^:^0^},^0-7^:{^x^:0,^y^:0,^isFlippedX^:false,^tileSymbol^:^¥^,^tilesetIdx^:^0^},^0-8^:{^x^:0,^y^:0,^isFlippedX^:false,^tileSymbol^:^¥^,^tilesetIdx^:^0^},^0-9^:{^x^:0,^y^:0,^isFlippedX^:false,^tileSymbol^:^¥^,^tilesetIdx^:^0^},^1-0^:{^x^:0,^y^:0,^isFlippedX^:false,^tileSymbol^:^¥^,^tilesetIdx^:^0^},^1-1^:{^x^:0,^y^:0,^isFlippedX^:false,^tileSymbol^:^¥^,^tilesetIdx^:^0^},^1-2^:{^x^:0,^y^:0,^isFlippedX^:false,^tileSymbol^:^¥^,^tilesetIdx^:^0^},^1-3^:{^x^:0,^y^:0,^isFlippedX^:false,^tileSymbol^:^¥^,^tilesetIdx^:^0^},^1-4^:{^x^:0,^y^:0,^isFlippedX^:false,^tileSymbol^:^¥^,^tilesetIdx^:^0^},^1-5^:{^x^:0,^y^:0,^isFlippedX^:false,^tileSymbol^:^¥^,^tilesetIdx^:^0^},^1-6^:{^x^:0,^y^:0,^isFlippedX^:false,^tileSymbol^:^¥^,^tilesetIdx^:^0^},^1-7^:{^x^:0,^y^:0,^isFlippedX^:false,^tileSymbol^:^¥^,^tilesetIdx^:^0^},^1-8^:{^x^:0,^y^:0,^isFlippedX^:false,^tileSymbol^:^¥^,^tilesetIdx^:^0^},^1-9^:{^x^:0,^y^:0,^isFlippedX^:false,^tileSymbol^:^¥^,^tilesetIdx^:^0^},^2-0^:{^x^:0,^y^:0,^isFlippedX^:false,^tileSymbol^:^¥^,^tilesetIdx^:^0^},^2-1^:{^x^:0,^y^:0,^isFlippedX^:false,^tileSymbol^:^¥^,^tilesetIdx^:^0^},^2-2^:{^x^:0,^y^:0,^isFlippedX^:false,^tileSymbol^:^¥^,^tilesetIdx^:^0^},^2-3^:{^x^:0,^y^:0,^isFlippedX^:false,^tileSymbol^:^¥^,^tilesetIdx^:^0^},^2-4^:{^x^:0,^y^:0,^isFlippedX^:false,^tileSymbol^:^¥^,^tilesetIdx^:^0^},^2-5^:{^x^:0,^y^:0,^isFlippedX^:false,^tileSymbol^:^¥^,^tilesetIdx^:^0^},^2-6^:{^x^:0,^y^:0,^isFlippedX^:false,^tileSymbol^:^¥^,^tilesetIdx^:^0^},^2-7^:{^x^:0,^y^:0,^isFlippedX^:false,^tileSymbol^:^¥^,^tilesetIdx^:^0^},^2-8^:{^x^:0,^y^:0,^isFlippedX^:false,^tileSymbol^:^¥^,^tilesetIdx^:^0^},^2-9^:{^x^:0,^y^:0,^isFlippedX^:false,^tileSymbol^:^¥^,^tilesetIdx^:^0^},^3-0^:{^x^:0,^y^:0,^isFlippedX^:false,^tileSymbol^:^¥^,^tilesetIdx^:^0^},^3-1^:{^x^:0,^y^:0,^isFlippedX^:false,^tileSymbol^:^¥^,^tilesetIdx^:^0^},^3-2^:{^x^:0,^y^:0,^isFlippedX^:false,^tileSymbol^:^¥^,^tilesetIdx^:^0^},^3-3^:{^x^:0,^y^:0,^isFlippedX^:false,^tileSymbol^:^¥^,^tilesetIdx^:^0^},^3-4^:{^x^:0,^y^:0,^isFlippedX^:false,^tileSymbol^:^¥^,^tilesetIdx^:^0^},^3-5^:{^x^:0,^y^:0,^isFlippedX^:false,^tileSymbol^:^¥^,^tilesetIdx^:^0^},^3-6^:{^x^:0,^y^:0,^isFlippedX^:false,^tileSymbol^:^¥^,^tilesetIdx^:^0^},^3-7^:{^x^:0,^y^:0,^isFlippedX^:false,^tileSymbol^:^¥^,^tilesetIdx^:^0^},^3-8^:{^x^:0,^y^:0,^isFlippedX^:false,^tileSymbol^:^¥^,^tilesetIdx^:^0^},^3-9^:{^x^:0,^y^:0,^isFlippedX^:false,^tileSymbol^:^¥^,^tilesetIdx^:^0^},^4-0^:{^x^:0,^y^:0,^isFlippedX^:false,^tileSymbol^:^¥^,^tilesetIdx^:^0^},^4-1^:{^x^:0,^y^:0,^isFlippedX^:false,^tileSymbol^:^¥^,^tilesetIdx^:^0^},^4-2^:{^x^:0,^y^:0,^isFlippedX^:false,^tileSymbol^:^¥^,^tilesetIdx^:^0^},^4-3^:{^x^:0,^y^:0,^isFlippedX^:false,^tileSymbol^:^¥^,^tilesetIdx^:^0^},^4-4^:{^x^:0,^y^:0,^isFlippedX^:false,^tileSymbol^:^¥^,^tilesetIdx^:^0^},^4-5^:{^x^:0,^y^:0,^isFlippedX^:false,^tileSymbol^:^¥^,^tilesetIdx^:^0^},^4-6^:{^x^:0,^y^:0,^isFlippedX^:false,^tileSymbol^:^¥^,^tilesetIdx^:^0^},^4-7^:{^x^:0,^y^:0,^isFlippedX^:false,^tileSymbol^:^¥^,^tilesetIdx^:^0^},^4-8^:{^x^:0,^y^:0,^isFlippedX^:false,^tileSymbol^:^¥^,^tilesetIdx^:^0^},^4-9^:{^x^:0,^y^:0,^isFlippedX^:false,^tileSymbol^:^¥^,^tilesetIdx^:^0^},^5-0^:{^x^:0,^y^:0,^isFlippedX^:false,^tileSymbol^:^¥^,^tilesetIdx^:^0^},^5-1^:{^x^:0,^y^:0,^isFlippedX^:false,^tileSymbol^:^¥^,^tilesetIdx^:^0^},^5-2^:{^x^:0,^y^:0,^isFlippedX^:false,^tileSymbol^:^¥^,^tilesetIdx^:^0^},^5-3^:{^x^:0,^y^:0,^isFlippedX^:false,^tileSymbol^:^¥^,^tilesetIdx^:^0^},^5-4^:{^x^:0,^y^:0,^isFlippedX^:false,^tileSymbol^:^¥^,^tilesetIdx^:^0^},^5-5^:{^x^:0,^y^:0,^isFlippedX^:false,^tileSymbol^:^¥^,^tilesetIdx^:^0^},^5-6^:{^x^:0,^y^:0,^isFlippedX^:false,^tileSymbol^:^¥^,^tilesetIdx^:^0^},^5-7^:{^x^:0,^y^:0,^isFlippedX^:false,^tileSymbol^:^¥^,^tilesetIdx^:^0^},^5-8^:{^x^:0,^y^:0,^isFlippedX^:false,^tileSymbol^:^¥^,^tilesetIdx^:^0^},^5-9^:{^x^:0,^y^:0,^isFlippedX^:false,^tileSymbol^:^¥^,^tilesetIdx^:^0^},^6-0^:{^x^:0,^y^:0,^isFlippedX^:false,^tileSymbol^:^¥^,^tilesetIdx^:^0^},^6-1^:{^x^:0,^y^:0,^isFlippedX^:false,^tileSymbol^:^¥^,^tilesetIdx^:^0^},^6-2^:{^x^:0,^y^:0,^isFlippedX^:false,^tileSymbol^:^¥^,^tilesetIdx^:^0^},^6-3^:{^x^:0,^y^:0,^isFlippedX^:false,^tileSymbol^:^¥^,^tilesetIdx^:^0^},^6-4^:{^x^:0,^y^:0,^isFlippedX^:false,^tileSymbol^:^¥^,^tilesetIdx^:^0^},^6-5^:{^x^:0,^y^:0,^isFlippedX^:false,^tileSymbol^:^¥^,^tilesetIdx^:^0^},^6-6^:{^x^:0,^y^:0,^isFlippedX^:false,^tileSymbol^:^¥^,^tilesetIdx^:^0^},^6-7^:{^x^:0,^y^:0,^isFlippedX^:false,^tileSymbol^:^¥^,^tilesetIdx^:^0^},^6-8^:{^x^:0,^y^:0,^isFlippedX^:false,^tileSymbol^:^¥^,^tilesetIdx^:^0^},^6-9^:{^x^:0,^y^:0,^isFlippedX^:false,^tileSymbol^:^¥^,^tilesetIdx^:^0^},^7-0^:{^x^:0,^y^:0,^isFlippedX^:false,^tileSymbol^:^¥^,^tilesetIdx^:^0^},^7-1^:{^x^:0,^y^:0,^isFlippedX^:false,^tileSymbol^:^¥^,^tilesetIdx^:^0^},^7-2^:{^x^:0,^y^:0,^isFlippedX^:false,^tileSymbol^:^¥^,^tilesetIdx^:^0^},^7-3^:{^x^:0,^y^:0,^isFlippedX^:false,^tileSymbol^:^¥^,^tilesetIdx^:^0^},^7-4^:{^x^:0,^y^:0,^isFlippedX^:false,^tileSymbol^:^¥^,^tilesetIdx^:^0^},^7-5^:{^x^:0,^y^:0,^isFlippedX^:false,^tileSymbol^:^¥^,^tilesetIdx^:^0^},^7-6^:{^x^:0,^y^:0,^isFlippedX^:false,^tileSymbol^:^¥^,^tilesetIdx^:^0^},^7-7^:{^x^:0,^y^:0,^isFlippedX^:false,^tileSymbol^:^¥^,^tilesetIdx^:^0^},^7-8^:{^x^:0,^y^:0,^isFlippedX^:false,^tileSymbol^:^¥^,^tilesetIdx^:^0^},^7-9^:{^x^:0,^y^:0,^isFlippedX^:false,^tileSymbol^:^¥^,^tilesetIdx^:^0^},^8-0^:{^x^:0,^y^:0,^isFlippedX^:false,^tileSymbol^:^¥^,^tilesetIdx^:^0^},^8-1^:{^x^:0,^y^:0,^isFlippedX^:false,^tileSymbol^:^¥^,^tilesetIdx^:^0^},^8-2^:{^x^:0,^y^:0,^isFlippedX^:false,^tileSymbol^:^¥^,^tilesetIdx^:^0^},^8-3^:{^x^:0,^y^:0,^isFlippedX^:false,^tileSymbol^:^¥^,^tilesetIdx^:^0^},^8-4^:{^x^:0,^y^:0,^isFlippedX^:false,^tileSymbol^:^¥^,^tilesetIdx^:^0^},^8-5^:{^x^:0,^y^:0,^isFlippedX^:false,^tileSymbol^:^¥^,^tilesetIdx^:^0^},^8-6^:{^x^:0,^y^:0,^isFlippedX^:false,^tileSymbol^:^¥^,^tilesetIdx^:^0^},^8-7^:{^x^:0,^y^:0,^isFlippedX^:false,^tileSymbol^:^¥^,^tilesetIdx^:^0^},^8-8^:{^x^:0,^y^:0,^isFlippedX^:false,^tileSymbol^:^¥^,^tilesetIdx^:^0^},^8-9^:{^x^:0,^y^:0,^isFlippedX^:false,^tileSymbol^:^¥^,^tilesetIdx^:^0^},^9-0^:{^x^:0,^y^:0,^isFlippedX^:false,^tileSymbol^:^¥^,^tilesetIdx^:^0^},^9-1^:{^x^:0,^y^:0,^isFlippedX^:false,^tileSymbol^:^¥^,^tilesetIdx^:^0^},^9-2^:{^x^:0,^y^:0,^isFlippedX^:false,^tileSymbol^:^¥^,^tilesetIdx^:^0^},^9-3^:{^x^:0,^y^:0,^isFlippedX^:false,^tileSymbol^:^¥^,^tilesetIdx^:^0^},^9-4^:{^x^:0,^y^:0,^isFlippedX^:false,^tileSymbol^:^¥^,^tilesetIdx^:^0^},^9-5^:{^x^:0,^y^:0,^isFlippedX^:false,^tileSymbol^:^¥^,^tilesetIdx^:^0^},^9-6^:{^x^:0,^y^:0,^isFlippedX^:false,^tileSymbol^:^¥^,^tilesetIdx^:^0^},^9-7^:{^x^:0,^y^:0,^isFlippedX^:false,^tileSymbol^:^¥^,^tilesetIdx^:^0^},^9-8^:{^x^:0,^y^:0,^isFlippedX^:false,^tileSymbol^:^¥^,^tilesetIdx^:^0^},^9-9^:{^x^:0,^y^:0,^isFlippedX^:false,^tileSymbol^:^¥^,^tilesetIdx^:^0^},^0-10^:{^x^:0,^y^:0,^tileSymbol^:^¥^,^tilesetIdx^:^0^},^0-11^:{^x^:0,^y^:0,^tileSymbol^:^¥^,^tilesetIdx^:^0^},^0-12^:{^x^:0,^y^:0,^tileSymbol^:^¥^,^tilesetIdx^:^0^},^0-13^:{^x^:0,^y^:0,^tileSymbol^:^¥^,^tilesetIdx^:^0^},^0-14^:{^x^:0,^y^:0,^tileSymbol^:^¥^,^tilesetIdx^:^0^},^0-15^:{^x^:0,^y^:0,^tileSymbol^:^¥^,^tilesetIdx^:^0^},^0-16^:{^x^:0,^y^:0,^tileSymbol^:^¥^,^tilesetIdx^:^0^},^0-17^:{^x^:0,^y^:0,^tileSymbol^:^¥^,^tilesetIdx^:^0^},^0-18^:{^x^:0,^y^:0,^tileSymbol^:^¥^,^tilesetIdx^:^0^},^0-19^:{^x^:0,^y^:0,^tileSymbol^:^¥^,^tilesetIdx^:^0^},^1-10^:{^x^:0,^y^:0,^tileSymbol^:^¥^,^tilesetIdx^:^0^},^1-11^:{^x^:0,^y^:0,^tileSymbol^:^¥^,^tilesetIdx^:^0^},^1-12^:{^x^:0,^y^:0,^tileSymbol^:^¥^,^tilesetIdx^:^0^},^1-13^:{^x^:0,^y^:0,^tileSymbol^:^¥^,^tilesetIdx^:^0^},^1-14^:{^x^:0,^y^:0,^tileSymbol^:^¥^,^tilesetIdx^:^0^},^1-15^:{^x^:0,^y^:0,^tileSymbol^:^¥^,^tilesetIdx^:^0^},^1-16^:{^x^:0,^y^:0,^tileSymbol^:^¥^,^tilesetIdx^:^0^},^1-17^:{^x^:0,^y^:0,^tileSymbol^:^¥^,^tilesetIdx^:^0^},^1-18^:{^x^:0,^y^:0,^tileSymbol^:^¥^,^tilesetIdx^:^0^},^1-19^:{^x^:0,^y^:0,^tileSymbol^:^¥^,^tilesetIdx^:^0^},^2-10^:{^x^:0,^y^:0,^tileSymbol^:^¥^,^tilesetIdx^:^0^},^2-11^:{^x^:0,^y^:0,^tileSymbol^:^¥^,^tilesetIdx^:^0^},^2-12^:{^x^:0,^y^:0,^tileSymbol^:^¥^,^tilesetIdx^:^0^},^2-13^:{^x^:0,^y^:0,^tileSymbol^:^¥^,^tilesetIdx^:^0^},^2-14^:{^x^:0,^y^:0,^tileSymbol^:^¥^,^tilesetIdx^:^0^},^2-15^:{^x^:0,^y^:0,^tileSymbol^:^¥^,^tilesetIdx^:^0^},^2-16^:{^x^:0,^y^:0,^tileSymbol^:^¥^,^tilesetIdx^:^0^},^2-17^:{^x^:0,^y^:0,^tileSymbol^:^¥^,^tilesetIdx^:^0^},^2-18^:{^x^:0,^y^:0,^tileSymbol^:^¥^,^tilesetIdx^:^0^},^3-10^:{^x^:0,^y^:0,^tileSymbol^:^¥^,^tilesetIdx^:^0^},^3-11^:{^x^:0,^y^:0,^tileSymbol^:^¥^,^tilesetIdx^:^0^},^3-12^:{^x^:0,^y^:0,^tileSymbol^:^¥^,^tilesetIdx^:^0^},^3-13^:{^x^:0,^y^:0,^tileSymbol^:^¥^,^tilesetIdx^:^0^},^3-14^:{^x^:0,^y^:0,^tileSymbol^:^¥^,^tilesetIdx^:^0^},^3-15^:{^x^:0,^y^:0,^tileSymbol^:^¥^,^tilesetIdx^:^0^},^3-16^:{^x^:0,^y^:0,^tileSymbol^:^¥^,^tilesetIdx^:^0^},^3-17^:{^x^:0,^y^:0,^tileSymbol^:^¥^,^tilesetIdx^:^0^},^3-18^:{^x^:0,^y^:0,^tileSymbol^:^¥^,^tilesetIdx^:^0^},^4-10^:{^x^:0,^y^:0,^tileSymbol^:^¥^,^tilesetIdx^:^0^},^4-11^:{^x^:0,^y^:0,^tileSymbol^:^¥^,^tilesetIdx^:^0^},^4-12^:{^x^:0,^y^:0,^tileSymbol^:^¥^,^tilesetIdx^:^0^},^4-13^:{^x^:0,^y^:0,^tileSymbol^:^¥^,^tilesetIdx^:^0^},^4-14^:{^x^:0,^y^:0,^tileSymbol^:^¥^,^tilesetIdx^:^0^},^4-15^:{^x^:0,^y^:0,^tileSymbol^:^¥^,^tilesetIdx^:^0^},^4-16^:{^x^:0,^y^:0,^tileSymbol^:^¥^,^tilesetIdx^:^0^},^4-17^:{^x^:0,^y^:0,^tileSymbol^:^¥^,^tilesetIdx^:^0^},^4-18^:{^x^:0,^y^:0,^tileSymbol^:^¥^,^tilesetIdx^:^0^},^5-10^:{^x^:0,^y^:0,^tileSymbol^:^¥^,^tilesetIdx^:^0^},^5-11^:{^x^:0,^y^:0,^tileSymbol^:^¥^,^tilesetIdx^:^0^},^5-12^:{^x^:0,^y^:0,^tileSymbol^:^¥^,^tilesetIdx^:^0^},^5-13^:{^x^:0,^y^:0,^tileSymbol^:^¥^,^tilesetIdx^:^0^},^5-14^:{^x^:0,^y^:0,^tileSymbol^:^¥^,^tilesetIdx^:^0^},^5-15^:{^x^:0,^y^:0,^tileSymbol^:^¥^,^tilesetIdx^:^0^},^5-16^:{^x^:0,^y^:0,^tileSymbol^:^¥^,^tilesetIdx^:^0^},^5-17^:{^x^:0,^y^:0,^tileSymbol^:^¥^,^tilesetIdx^:^0^},^5-18^:{^x^:0,^y^:0,^tileSymbol^:^¥^,^tilesetIdx^:^0^},^6-10^:{^x^:0,^y^:0,^tileSymbol^:^¥^,^tilesetIdx^:^0^},^6-11^:{^x^:0,^y^:0,^tileSymbol^:^¥^,^tilesetIdx^:^0^},^6-12^:{^x^:0,^y^:0,^tileSymbol^:^¥^,^tilesetIdx^:^0^},^6-13^:{^x^:0,^y^:0,^tileSymbol^:^¥^,^tilesetIdx^:^0^},^6-14^:{^x^:0,^y^:0,^tileSymbol^:^¥^,^tilesetIdx^:^0^},^6-15^:{^x^:0,^y^:0,^tileSymbol^:^¥^,^tilesetIdx^:^0^},^6-16^:{^x^:0,^y^:0,^tileSymbol^:^¥^,^tilesetIdx^:^0^},^6-17^:{^x^:0,^y^:0,^tileSymbol^:^¥^,^tilesetIdx^:^0^},^6-18^:{^x^:0,^y^:0,^tileSymbol^:^¥^,^tilesetIdx^:^0^},^7-10^:{^x^:0,^y^:0,^tileSymbol^:^¥^,^tilesetIdx^:^0^},^7-11^:{^x^:0,^y^:0,^tileSymbol^:^¥^,^tilesetIdx^:^0^},^7-12^:{^x^:0,^y^:0,^tileSymbol^:^¥^,^tilesetIdx^:^0^},^7-13^:{^x^:0,^y^:0,^tileSymbol^:^¥^,^tilesetIdx^:^0^},^7-14^:{^x^:0,^y^:0,^tileSymbol^:^¥^,^tilesetIdx^:^0^},^7-15^:{^x^:0,^y^:0,^tileSymbol^:^¥^,^tilesetIdx^:^0^},^7-16^:{^x^:0,^y^:0,^tileSymbol^:^¥^,^tilesetIdx^:^0^},^7-17^:{^x^:0,^y^:0,^tileSymbol^:^¥^,^tilesetIdx^:^0^},^7-18^:{^x^:0,^y^:0,^tileSymbol^:^¥^,^tilesetIdx^:^0^},^8-10^:{^x^:0,^y^:0,^tileSymbol^:^¥^,^tilesetIdx^:^0^},^8-11^:{^x^:0,^y^:0,^tileSymbol^:^¥^,^tilesetIdx^:^0^},^8-12^:{^x^:0,^y^:0,^tileSymbol^:^¥^,^tilesetIdx^:^0^},^8-13^:{^x^:0,^y^:0,^tileSymbol^:^¥^,^tilesetIdx^:^0^},^8-14^:{^x^:0,^y^:0,^tileSymbol^:^¥^,^tilesetIdx^:^0^},^8-15^:{^x^:0,^y^:0,^tileSymbol^:^¥^,^tilesetIdx^:^0^},^8-16^:{^x^:0,^y^:0,^tileSymbol^:^¥^,^tilesetIdx^:^0^},^8-17^:{^x^:0,^y^:0,^tileSymbol^:^¥^,^tilesetIdx^:^0^},^8-18^:{^x^:0,^y^:0,^tileSymbol^:^¥^,^tilesetIdx^:^0^},^8-19^:{^x^:0,^y^:0,^tileSymbol^:^¥^,^tilesetIdx^:^0^},^9-10^:{^x^:0,^y^:0,^tileSymbol^:^¥^,^tilesetIdx^:^0^},^9-11^:{^x^:0,^y^:0,^tileSymbol^:^¥^,^tilesetIdx^:^0^},^9-12^:{^x^:0,^y^:0,^tileSymbol^:^¥^,^tilesetIdx^:^0^},^9-13^:{^x^:0,^y^:0,^tileSymbol^:^¥^,^tilesetIdx^:^0^},^9-14^:{^x^:0,^y^:0,^tileSymbol^:^¥^,^tilesetIdx^:^0^},^9-15^:{^x^:0,^y^:0,^tileSymbol^:^¥^,^tilesetIdx^:^0^},^9-16^:{^x^:0,^y^:0,^tileSymbol^:^¥^,^tilesetIdx^:^0^},^9-17^:{^x^:0,^y^:0,^tileSymbol^:^¥^,^tilesetIdx^:^0^},^9-18^:{^x^:0,^y^:0,^tileSymbol^:^¥^,^tilesetIdx^:^0^},^10-11^:{^x^:0,^y^:0,^tileSymbol^:^¥^,^tilesetIdx^:^0^}},^opacity^:1,^visible^:true,^animatedTiles^:{}},{^name^:^item-base^,^tiles^:{^0-0^:{^x^:1,^y^:6,^tileSymbol^:^Ö^,^tilesetIdx^:^0^},^0-2^:{^x^:0,^y^:5,^tileSymbol^:^Í^,^tilesetIdx^:^0^},^0-5^:{^x^:2,^y^:6,^tileSymbol^:^×^,^tilesetIdx^:^0^},^0-6^:{^x^:2,^y^:5,^tileSymbol^:^Ï^,^tilesetIdx^:^0^},^0-8^:{^x^:0,^y^:6,^tileSymbol^:^Õ^,^tilesetIdx^:^0^},^1-4^:{^x^:0,^y^:7,^tileSymbol^:^Ý^,^tilesetIdx^:^0^},^1-5^:{^x^:2,^y^:7,^tileSymbol^:^ß^,^tilesetIdx^:^0^},^1-9^:{^x^:1,^y^:5,^tileSymbol^:^Î^,^tilesetIdx^:^0^},^3-0^:{^x^:0,^y^:6,^tileSymbol^:^Õ^,^tilesetIdx^:^0^},^6-0^:{^x^:6,^y^:107,^isFlippedX^:false,^tileSymbol^:^Ѓ^,^tilesetIdx^:^0^},^6-2^:{^x^:0,^y^:8,^tileSymbol^:^å^,^tilesetIdx^:^0^},^7-2^:{^x^:1,^y^:8,^tileSymbol^:^æ^,^tilesetIdx^:^0^},^7-7^:{^x^:1,^y^:5,^tileSymbol^:^Î^,^tilesetIdx^:^0^},^7-9^:{^x^:2,^y^:7,^tileSymbol^:^ß^,^tilesetIdx^:^0^},^8-0^:{^x^:1,^y^:6,^tileSymbol^:^Ö^,^tilesetIdx^:^0^},^8-1^:{^x^:1,^y^:6,^tileSymbol^:^Ö^,^tilesetIdx^:^0^},^8-3^:{^x^:0,^y^:6,^tileSymbol^:^Õ^,^tilesetIdx^:^0^},^8-4^:{^x^:2,^y^:7,^tileSymbol^:^ß^,^tilesetIdx^:^0^},^8-7^:{^x^:2,^y^:6,^tileSymbol^:^×^,^tilesetIdx^:^0^},^8-8^:{^x^:1,^y^:6,^tileSymbol^:^Ö^,^tilesetIdx^:^0^},^9-4^:{^x^:2,^y^:7,^tileSymbol^:^ß^,^tilesetIdx^:^0^},^9-5^:{^x^:1,^y^:6,^tileSymbol^:^Ö^,^tilesetIdx^:^0^},^9-6^:{^x^:0,^y^:7,^tileSymbol^:^Ý^,^tilesetIdx^:^0^}},^opacity^:1,^visible^:true,^animatedTiles^:{}},{^name^:^road^,^tiles^:{^1-1^:{^x^:5,^y^:0,^isFlippedX^:false,^tileSymbol^:^ª^,^tilesetIdx^:^0^},^1-2^:{^x^:5,^y^:0,^isFlippedX^:false,^tileSymbol^:^ª^,^tilesetIdx^:^0^},^1-3^:{^x^:5,^y^:0,^isFlippedX^:false,^tileSymbol^:^ª^,^tilesetIdx^:^0^},^2-1^:{^x^:5,^y^:0,^isFlippedX^:false,^tileSymbol^:^ª^,^tilesetIdx^:^0^},^2-3^:{^x^:5,^y^:0,^isFlippedX^:false,^tileSymbol^:^ª^,^tilesetIdx^:^0^},^3-1^:{^x^:5,^y^:0,^isFlippedX^:false,^tileSymbol^:^ª^,^tilesetIdx^:^0^},^3-3^:{^x^:5,^y^:0,^isFlippedX^:false,^tileSymbol^:^ª^,^tilesetIdx^:^0^},^3-6^:{^x^:5,^y^:0,^isFlippedX^:false,^tileSymbol^:^ª^,^tilesetIdx^:^0^},^3-7^:{^x^:5,^y^:0,^isFlippedX^:false,^tileSymbol^:^ª^,^tilesetIdx^:^0^},^3-8^:{^x^:5,^y^:0,^isFlippedX^:false,^tileSymbol^:^ª^,^tilesetIdx^:^0^},^3-9^:{^x^:5,^y^:0,^isFlippedX^:false,^tileSymbol^:^ª^,^tilesetIdx^:^0^},^4-1^:{^x^:5,^y^:0,^isFlippedX^:false,^tileSymbol^:^ª^,^tilesetIdx^:^0^},^4-3^:{^x^:5,^y^:0,^isFlippedX^:false,^tileSymbol^:^ª^,^tilesetIdx^:^0^},^4-4^:{^x^:5,^y^:0,^isFlippedX^:false,^tileSymbol^:^ª^,^tilesetIdx^:^0^},^4-6^:{^x^:5,^y^:0,^isFlippedX^:false,^tileSymbol^:^ª^,^tilesetIdx^:^0^},^5-1^:{^x^:5,^y^:0,^isFlippedX^:false,^tileSymbol^:^ª^,^tilesetIdx^:^0^},^5-4^:{^x^:5,^y^:0,^isFlippedX^:false,^tileSymbol^:^ª^,^tilesetIdx^:^0^},^5-6^:{^x^:5,^y^:0,^isFlippedX^:false,^tileSymbol^:^ª^,^tilesetIdx^:^0^},^6-1^:{^x^:5,^y^:0,^isFlippedX^:false,^tileSymbol^:^ª^,^tilesetIdx^:^0^},^6-4^:{^x^:5,^y^:0,^isFlippedX^:false,^tileSymbol^:^ª^,^tilesetIdx^:^0^},^6-5^:{^x^:5,^y^:0,^isFlippedX^:false,^tileSymbol^:^ª^,^tilesetIdx^:^0^},^6-6^:{^x^:5,^y^:0,^isFlippedX^:false,^tileSymbol^:^ª^,^tilesetIdx^:^0^},^2-14^:{^x^:5,^y^:0,^isFlippedX^:false,^tileSymbol^:^ª^,^tilesetIdx^:^0^},^2-15^:{^x^:5,^y^:0,^isFlippedX^:false,^tileSymbol^:^ª^,^tilesetIdx^:^0^},^2-16^:{^x^:5,^y^:0,^isFlippedX^:false,^tileSymbol^:^ª^,^tilesetIdx^:^0^},^3-10^:{^x^:5,^y^:0,^isFlippedX^:false,^tileSymbol^:^ª^,^tilesetIdx^:^0^},^3-11^:{^x^:5,^y^:0,^isFlippedX^:false,^tileSymbol^:^ª^,^tilesetIdx^:^0^},^3-12^:{^x^:5,^y^:0,^isFlippedX^:false,^tileSymbol^:^ª^,^tilesetIdx^:^0^},^3-14^:{^x^:5,^y^:0,^isFlippedX^:false,^tileSymbol^:^ª^,^tilesetIdx^:^0^},^3-16^:{^x^:5,^y^:0,^isFlippedX^:false,^tileSymbol^:^ª^,^tilesetIdx^:^0^},^4-12^:{^x^:5,^y^:0,^isFlippedX^:false,^tileSymbol^:^ª^,^tilesetIdx^:^0^},^4-14^:{^x^:5,^y^:0,^isFlippedX^:false,^tileSymbol^:^ª^,^tilesetIdx^:^0^},^4-16^:{^x^:5,^y^:0,^isFlippedX^:false,^tileSymbol^:^ª^,^tilesetIdx^:^0^},^5-12^:{^x^:5,^y^:0,^isFlippedX^:false,^tileSymbol^:^ª^,^tilesetIdx^:^0^},^5-14^:{^x^:5,^y^:0,^isFlippedX^:false,^tileSymbol^:^ª^,^tilesetIdx^:^0^},^5-16^:{^x^:5,^y^:0,^isFlippedX^:false,^tileSymbol^:^ª^,^tilesetIdx^:^0^},^6-12^:{^x^:5,^y^:0,^isFlippedX^:false,^tileSymbol^:^ª^,^tilesetIdx^:^0^},^6-14^:{^x^:5,^y^:0,^isFlippedX^:false,^tileSymbol^:^ª^,^tilesetIdx^:^0^},^6-16^:{^x^:5,^y^:0,^isFlippedX^:false,^tileSymbol^:^ª^,^tilesetIdx^:^0^},^6-17^:{^x^:5,^y^:0,^isFlippedX^:false,^tileSymbol^:^ª^,^tilesetIdx^:^0^},^6-18^:{^x^:5,^y^:0,^isFlippedX^:false,^tileSymbol^:^ª^,^tilesetIdx^:^0^},^7-12^:{^x^:5,^y^:0,^isFlippedX^:false,^tileSymbol^:^ª^,^tilesetIdx^:^0^},^7-13^:{^x^:5,^y^:0,^isFlippedX^:false,^tileSymbol^:^ª^,^tilesetIdx^:^0^},^7-14^:{^x^:5,^y^:0,^isFlippedX^:false,^tileSymbol^:^ª^,^tilesetIdx^:^0^}},^opacity^:1,^visible^:true,^animatedTiles^:{}},{^name^:^item-road^,^tiles^:{^1-3^:{^x^:2,^y^:28,^tileSymbol^:^Ƈ^,^tilesetIdx^:^0^},^2-1^:{^x^:3,^y^:8,^tileSymbol^:^è^,^tilesetIdx^:^0^},^3-6^:{^x^:3,^y^:8,^tileSymbol^:^è^,^tilesetIdx^:^0^},^3-9^:{^x^:2,^y^:28,^isFlippedX^:false,^tileSymbol^:^Ƈ^,^tilesetIdx^:^0^},^4-1^:{^x^:7,^y^:132,^tileSymbol^:^ӌ^,^tilesetIdx^:^0^},^4-3^:{^x^:3,^y^:8,^tileSymbol^:^è^,^tilesetIdx^:^0^},^4-4^:{^x^:2,^y^:28,^tileSymbol^:^Ƈ^,^tilesetIdx^:^0^},^4-6^:{^x^:2,^y^:28,^tileSymbol^:^Ƈ^,^tilesetIdx^:^0^},^6-5^:{^x^:3,^y^:8,^tileSymbol^:^è^,^tilesetIdx^:^0^},^2-15^:{^x^:3,^y^:8,^isFlippedX^:false,^tileSymbol^:^è^,^tilesetIdx^:^0^},^5-12^:{^x^:3,^y^:8,^isFlippedX^:false,^tileSymbol^:^è^,^tilesetIdx^:^0^},^6-16^:{^x^:2,^y^:28,^isFlippedX^:false,^tileSymbol^:^Ƈ^,^tilesetIdx^:^0^}},^opacity^:1,^visible^:true,^animatedTiles^:{}},{^name^:^charater^,^tiles^:{^6-17^:{^x^:3,^y^:19,^isFlippedX^:false,^tileSymbol^:^ŀ^,^tilesetIdx^:^0^},^6-18^:{^x^:3,^y^:20,^isFlippedX^:false,^tileSymbol^:^ň^,^tilesetIdx^:^0^},^6-19^:{^x^:3,^y^:20,^isFlippedX^:false,^tileSymbol^:^ň^,^tilesetIdx^:^0^}},^opacity^:1,^visible^:true,^animatedTiles^:{}}],^mapWidth^:10,^tileSize^:32,^gridColor^:^#00FFFF^,^mapHeight^:19},^nam_ngang^:{^name^:^nam_ngang^,^width^:320,^height^:320,^layers^:[{^name^:^base^,^tiles^:{^0-0^:{^x^:0,^y^:0,^isFlippedX^:false,^tileSymbol^:^¥^,^tilesetIdx^:^0^},^0-1^:{^x^:0,^y^:0,^isFlippedX^:false,^tileSymbol^:^¥^,^tilesetIdx^:^0^},^0-2^:{^x^:0,^y^:0,^isFlippedX^:false,^tileSymbol^:^¥^,^tilesetIdx^:^0^},^0-3^:{^x^:0,^y^:0,^isFlippedX^:false,^tileSymbol^:^¥^,^tilesetIdx^:^0^},^0-4^:{^x^:0,^y^:0,^isFlippedX^:false,^tileSymbol^:^¥^,^tilesetIdx^:^0^},^0-5^:{^x^:0,^y^:0,^isFlippedX^:false,^tileSymbol^:^¥^,^tilesetIdx^:^0^},^0-6^:{^x^:0,^y^:0,^isFlippedX^:false,^tileSymbol^:^¥^,^tilesetIdx^:^0^},^0-7^:{^x^:0,^y^:0,^isFlippedX^:false,^tileSymbol^:^¥^,^tilesetIdx^:^0^},^0-8^:{^x^:0,^y^:0,^isFlippedX^:false,^tileSymbol^:^¥^,^tilesetIdx^:^0^},^0-9^:{^x^:0,^y^:0,^isFlippedX^:false,^tileSymbol^:^¥^,^tilesetIdx^:^0^},^1-0^:{^x^:0,^y^:0,^isFlippedX^:false,^tileSymbol^:^¥^,^tilesetIdx^:^0^},^1-1^:{^x^:0,^y^:0,^isFlippedX^:false,^tileSymbol^:^¥^,^tilesetIdx^:^0^},^1-2^:{^x^:0,^y^:0,^isFlippedX^:false,^tileSymbol^:^¥^,^tilesetIdx^:^0^},^1-3^:{^x^:0,^y^:0,^isFlippedX^:false,^tileSymbol^:^¥^,^tilesetIdx^:^0^},^1-4^:{^x^:0,^y^:0,^isFlippedX^:false,^tileSymbol^:^¥^,^tilesetIdx^:^0^},^1-5^:{^x^:0,^y^:0,^isFlippedX^:false,^tileSymbol^:^¥^,^tilesetIdx^:^0^},^1-6^:{^x^:0,^y^:0,^isFlippedX^:false,^tileSymbol^:^¥^,^tilesetIdx^:^0^},^1-7^:{^x^:0,^y^:0,^isFlippedX^:false,^tileSymbol^:^¥^,^tilesetIdx^:^0^},^1-8^:{^x^:0,^y^:0,^isFlippedX^:false,^tileSymbol^:^¥^,^tilesetIdx^:^0^},^1-9^:{^x^:0,^y^:0,^isFlippedX^:false,^tileSymbol^:^¥^,^tilesetIdx^:^0^},^2-0^:{^x^:0,^y^:0,^isFlippedX^:false,^tileSymbol^:^¥^,^tilesetIdx^:^0^},^2-1^:{^x^:0,^y^:0,^isFlippedX^:false,^tileSymbol^:^¥^,^tilesetIdx^:^0^},^2-2^:{^x^:0,^y^:0,^isFlippedX^:false,^tileSymbol^:^¥^,^tilesetIdx^:^0^},^2-3^:{^x^:0,^y^:0,^isFlippedX^:false,^tileSymbol^:^¥^,^tilesetIdx^:^0^},^2-4^:{^x^:0,^y^:0,^isFlippedX^:false,^tileSymbol^:^¥^,^tilesetIdx^:^0^},^2-5^:{^x^:0,^y^:0,^isFlippedX^:false,^tileSymbol^:^¥^,^tilesetIdx^:^0^},^2-6^:{^x^:0,^y^:0,^isFlippedX^:false,^tileSymbol^:^¥^,^tilesetIdx^:^0^},^2-7^:{^x^:0,^y^:0,^isFlippedX^:false,^tileSymbol^:^¥^,^tilesetIdx^:^0^},^2-8^:{^x^:0,^y^:0,^isFlippedX^:false,^tileSymbol^:^¥^,^tilesetIdx^:^0^},^2-9^:{^x^:0,^y^:0,^isFlippedX^:false,^tileSymbol^:^¥^,^tilesetIdx^:^0^},^3-0^:{^x^:0,^y^:0,^isFlippedX^:false,^tileSymbol^:^¥^,^tilesetIdx^:^0^},^3-1^:{^x^:0,^y^:0,^isFlippedX^:false,^tileSymbol^:^¥^,^tilesetIdx^:^0^},^3-2^:{^x^:0,^y^:0,^isFlippedX^:false,^tileSymbol^:^¥^,^tilesetIdx^:^0^},^3-3^:{^x^:0,^y^:0,^isFlippedX^:false,^tileSymbol^:^¥^,^tilesetIdx^:^0^},^3-4^:{^x^:0,^y^:0,^isFlippedX^:false,^tileSymbol^:^¥^,^tilesetIdx^:^0^},^3-5^:{^x^:0,^y^:0,^isFlippedX^:false,^tileSymbol^:^¥^,^tilesetIdx^:^0^},^3-6^:{^x^:0,^y^:0,^isFlippedX^:false,^tileSymbol^:^¥^,^tilesetIdx^:^0^},^3-7^:{^x^:0,^y^:0,^isFlippedX^:false,^tileSymbol^:^¥^,^tilesetIdx^:^0^},^3-8^:{^x^:0,^y^:0,^isFlippedX^:false,^tileSymbol^:^¥^,^tilesetIdx^:^0^},^3-9^:{^x^:0,^y^:0,^isFlippedX^:false,^tileSymbol^:^¥^,^tilesetIdx^:^0^},^4-0^:{^x^:0,^y^:0,^isFlippedX^:false,^tileSymbol^:^¥^,^tilesetIdx^:^0^},^4-1^:{^x^:0,^y^:0,^isFlippedX^:false,^tileSymbol^:^¥^,^tilesetIdx^:^0^},^4-2^:{^x^:0,^y^:0,^isFlippedX^:false,^tileSymbol^:^¥^,^tilesetIdx^:^0^},^4-3^:{^x^:0,^y^:0,^isFlippedX^:false,^tileSymbol^:^¥^,^tilesetIdx^:^0^},^4-4^:{^x^:0,^y^:0,^isFlippedX^:false,^tileSymbol^:^¥^,^tilesetIdx^:^0^},^4-5^:{^x^:0,^y^:0,^isFlippedX^:false,^tileSymbol^:^¥^,^tilesetIdx^:^0^},^4-6^:{^x^:0,^y^:0,^isFlippedX^:false,^tileSymbol^:^¥^,^tilesetIdx^:^0^},^4-7^:{^x^:0,^y^:0,^isFlippedX^:false,^tileSymbol^:^¥^,^tilesetIdx^:^0^},^4-8^:{^x^:0,^y^:0,^isFlippedX^:false,^tileSymbol^:^¥^,^tilesetIdx^:^0^},^4-9^:{^x^:0,^y^:0,^isFlippedX^:false,^tileSymbol^:^¥^,^tilesetIdx^:^0^},^5-0^:{^x^:0,^y^:0,^isFlippedX^:false,^tileSymbol^:^¥^,^tilesetIdx^:^0^},^5-1^:{^x^:0,^y^:0,^isFlippedX^:false,^tileSymbol^:^¥^,^tilesetIdx^:^0^},^5-2^:{^x^:0,^y^:0,^isFlippedX^:false,^tileSymbol^:^¥^,^tilesetIdx^:^0^},^5-3^:{^x^:0,^y^:0,^isFlippedX^:false,^tileSymbol^:^¥^,^tilesetIdx^:^0^},^5-4^:{^x^:0,^y^:0,^isFlippedX^:false,^tileSymbol^:^¥^,^tilesetIdx^:^0^},^5-5^:{^x^:0,^y^:0,^isFlippedX^:false,^tileSymbol^:^¥^,^tilesetIdx^:^0^},^5-6^:{^x^:0,^y^:0,^isFlippedX^:false,^tileSymbol^:^¥^,^tilesetIdx^:^0^},^5-7^:{^x^:0,^y^:0,^isFlippedX^:false,^tileSymbol^:^¥^,^tilesetIdx^:^0^},^5-8^:{^x^:0,^y^:0,^isFlippedX^:false,^tileSymbol^:^¥^,^tilesetIdx^:^0^},^5-9^:{^x^:0,^y^:0,^isFlippedX^:false,^tileSymbol^:^¥^,^tilesetIdx^:^0^},^6-0^:{^x^:0,^y^:0,^isFlippedX^:false,^tileSymbol^:^¥^,^tilesetIdx^:^0^},^6-1^:{^x^:0,^y^:0,^isFlippedX^:false,^tileSymbol^:^¥^,^tilesetIdx^:^0^},^6-2^:{^x^:0,^y^:0,^isFlippedX^:false,^tileSymbol^:^¥^,^tilesetIdx^:^0^},^6-3^:{^x^:0,^y^:0,^isFlippedX^:false,^tileSymbol^:^¥^,^tilesetIdx^:^0^},^6-4^:{^x^:0,^y^:0,^isFlippedX^:false,^tileSymbol^:^¥^,^tilesetIdx^:^0^},^6-5^:{^x^:0,^y^:0,^isFlippedX^:false,^tileSymbol^:^¥^,^tilesetIdx^:^0^},^6-6^:{^x^:0,^y^:0,^isFlippedX^:false,^tileSymbol^:^¥^,^tilesetIdx^:^0^},^6-7^:{^x^:0,^y^:0,^isFlippedX^:false,^tileSymbol^:^¥^,^tilesetIdx^:^0^},^6-8^:{^x^:0,^y^:0,^isFlippedX^:false,^tileSymbol^:^¥^,^tilesetIdx^:^0^},^6-9^:{^x^:0,^y^:0,^isFlippedX^:false,^tileSymbol^:^¥^,^tilesetIdx^:^0^},^7-0^:{^x^:0,^y^:0,^isFlippedX^:false,^tileSymbol^:^¥^,^tilesetIdx^:^0^},^7-1^:{^x^:0,^y^:0,^isFlippedX^:false,^tileSymbol^:^¥^,^tilesetIdx^:^0^},^7-2^:{^x^:0,^y^:0,^isFlippedX^:false,^tileSymbol^:^¥^,^tilesetIdx^:^0^},^7-3^:{^x^:0,^y^:0,^isFlippedX^:false,^tileSymbol^:^¥^,^tilesetIdx^:^0^},^7-4^:{^x^:0,^y^:0,^isFlippedX^:false,^tileSymbol^:^¥^,^tilesetIdx^:^0^},^7-5^:{^x^:0,^y^:0,^isFlippedX^:false,^tileSymbol^:^¥^,^tilesetIdx^:^0^},^7-6^:{^x^:0,^y^:0,^isFlippedX^:false,^tileSymbol^:^¥^,^tilesetIdx^:^0^},^7-7^:{^x^:0,^y^:0,^isFlippedX^:false,^tileSymbol^:^¥^,^tilesetIdx^:^0^},^7-8^:{^x^:0,^y^:0,^isFlippedX^:false,^tileSymbol^:^¥^,^tilesetIdx^:^0^},^7-9^:{^x^:0,^y^:0,^isFlippedX^:false,^tileSymbol^:^¥^,^tilesetIdx^:^0^},^8-0^:{^x^:0,^y^:0,^isFlippedX^:false,^tileSymbol^:^¥^,^tilesetIdx^:^0^},^8-1^:{^x^:0,^y^:0,^isFlippedX^:false,^tileSymbol^:^¥^,^tilesetIdx^:^0^},^8-2^:{^x^:0,^y^:0,^isFlippedX^:false,^tileSymbol^:^¥^,^tilesetIdx^:^0^},^8-3^:{^x^:0,^y^:0,^isFlippedX^:false,^tileSymbol^:^¥^,^tilesetIdx^:^0^},^8-4^:{^x^:0,^y^:0,^isFlippedX^:false,^tileSymbol^:^¥^,^tilesetIdx^:^0^},^8-5^:{^x^:0,^y^:0,^isFlippedX^:false,^tileSymbol^:^¥^,^tilesetIdx^:^0^},^8-6^:{^x^:0,^y^:0,^isFlippedX^:false,^tileSymbol^:^¥^,^tilesetIdx^:^0^},^8-7^:{^x^:0,^y^:0,^isFlippedX^:false,^tileSymbol^:^¥^,^tilesetIdx^:^0^},^8-8^:{^x^:0,^y^:0,^isFlippedX^:false,^tileSymbol^:^¥^,^tilesetIdx^:^0^},^8-9^:{^x^:0,^y^:0,^isFlippedX^:false,^tileSymbol^:^¥^,^tilesetIdx^:^0^},^9-0^:{^x^:0,^y^:0,^isFlippedX^:false,^tileSymbol^:^¥^,^tilesetIdx^:^0^},^9-1^:{^x^:0,^y^:0,^isFlippedX^:false,^tileSymbol^:^¥^,^tilesetIdx^:^0^},^9-2^:{^x^:0,^y^:0,^isFlippedX^:false,^tileSymbol^:^¥^,^tilesetIdx^:^0^},^9-3^:{^x^:0,^y^:0,^isFlippedX^:false,^tileSymbol^:^¥^,^tilesetIdx^:^0^},^9-4^:{^x^:0,^y^:0,^isFlippedX^:false,^tileSymbol^:^¥^,^tilesetIdx^:^0^},^9-5^:{^x^:0,^y^:0,^isFlippedX^:false,^tileSymbol^:^¥^,^tilesetIdx^:^0^},^9-6^:{^x^:0,^y^:0,^isFlippedX^:false,^tileSymbol^:^¥^,^tilesetIdx^:^0^},^9-7^:{^x^:0,^y^:0,^isFlippedX^:false,^tileSymbol^:^¥^,^tilesetIdx^:^0^},^9-8^:{^x^:0,^y^:0,^isFlippedX^:false,^tileSymbol^:^¥^,^tilesetIdx^:^0^},^9-9^:{^x^:0,^y^:0,^isFlippedX^:false,^tileSymbol^:^¥^,^tilesetIdx^:^0^},^0-10^:{^x^:0,^y^:0,^tileSymbol^:^¥^,^tilesetIdx^:^0^},^0-11^:{^x^:0,^y^:0,^tileSymbol^:^¥^,^tilesetIdx^:^0^},^0-12^:{^x^:0,^y^:0,^tileSymbol^:^¥^,^tilesetIdx^:^0^},^0-13^:{^x^:0,^y^:0,^tileSymbol^:^¥^,^tilesetIdx^:^0^},^0-14^:{^x^:0,^y^:0,^tileSymbol^:^¥^,^tilesetIdx^:^0^},^0-15^:{^x^:0,^y^:0,^tileSymbol^:^¥^,^tilesetIdx^:^0^},^0-16^:{^x^:0,^y^:0,^tileSymbol^:^¥^,^tilesetIdx^:^0^},^0-17^:{^x^:0,^y^:0,^tileSymbol^:^¥^,^tilesetIdx^:^0^},^0-18^:{^x^:0,^y^:0,^tileSymbol^:^¥^,^tilesetIdx^:^0^},^0-19^:{^x^:0,^y^:0,^tileSymbol^:^¥^,^tilesetIdx^:^0^},^1-10^:{^x^:0,^y^:0,^tileSymbol^:^¥^,^tilesetIdx^:^0^},^1-11^:{^x^:0,^y^:0,^tileSymbol^:^¥^,^tilesetIdx^:^0^},^1-12^:{^x^:0,^y^:0,^tileSymbol^:^¥^,^tilesetIdx^:^0^},^1-13^:{^x^:0,^y^:0,^tileSymbol^:^¥^,^tilesetIdx^:^0^},^1-14^:{^x^:0,^y^:0,^tileSymbol^:^¥^,^tilesetIdx^:^0^},^1-15^:{^x^:0,^y^:0,^tileSymbol^:^¥^,^tilesetIdx^:^0^},^1-16^:{^x^:0,^y^:0,^tileSymbol^:^¥^,^tilesetIdx^:^0^},^1-17^:{^x^:0,^y^:0,^tileSymbol^:^¥^,^tilesetIdx^:^0^},^1-18^:{^x^:0,^y^:0,^tileSymbol^:^¥^,^tilesetIdx^:^0^},^1-19^:{^x^:0,^y^:0,^tileSymbol^:^¥^,^tilesetIdx^:^0^},^2-10^:{^x^:0,^y^:0,^tileSymbol^:^¥^,^tilesetIdx^:^0^},^2-11^:{^x^:0,^y^:0,^tileSymbol^:^¥^,^tilesetIdx^:^0^},^2-12^:{^x^:0,^y^:0,^tileSymbol^:^¥^,^tilesetIdx^:^0^},^2-13^:{^x^:0,^y^:0,^tileSymbol^:^¥^,^tilesetIdx^:^0^},^2-14^:{^x^:0,^y^:0,^tileSymbol^:^¥^,^tilesetIdx^:^0^},^2-15^:{^x^:0,^y^:0,^tileSymbol^:^¥^,^tilesetIdx^:^0^},^2-16^:{^x^:0,^y^:0,^tileSymbol^:^¥^,^tilesetIdx^:^0^},^2-17^:{^x^:0,^y^:0,^tileSymbol^:^¥^,^tilesetIdx^:^0^},^2-18^:{^x^:0,^y^:0,^tileSymbol^:^¥^,^tilesetIdx^:^0^},^3-10^:{^x^:0,^y^:0,^tileSymbol^:^¥^,^tilesetIdx^:^0^},^3-11^:{^x^:0,^y^:0,^tileSymbol^:^¥^,^tilesetIdx^:^0^},^3-12^:{^x^:0,^y^:0,^tileSymbol^:^¥^,^tilesetIdx^:^0^},^3-13^:{^x^:0,^y^:0,^tileSymbol^:^¥^,^tilesetIdx^:^0^},^3-14^:{^x^:0,^y^:0,^tileSymbol^:^¥^,^tilesetIdx^:^0^},^3-15^:{^x^:0,^y^:0,^tileSymbol^:^¥^,^tilesetIdx^:^0^},^3-16^:{^x^:0,^y^:0,^tileSymbol^:^¥^,^tilesetIdx^:^0^},^3-17^:{^x^:0,^y^:0,^tileSymbol^:^¥^,^tilesetIdx^:^0^},^3-18^:{^x^:0,^y^:0,^tileSymbol^:^¥^,^tilesetIdx^:^0^},^4-10^:{^x^:0,^y^:0,^tileSymbol^:^¥^,^tilesetIdx^:^0^},^4-11^:{^x^:0,^y^:0,^tileSymbol^:^¥^,^tilesetIdx^:^0^},^4-12^:{^x^:0,^y^:0,^tileSymbol^:^¥^,^tilesetIdx^:^0^},^4-13^:{^x^:0,^y^:0,^tileSymbol^:^¥^,^tilesetIdx^:^0^},^4-14^:{^x^:0,^y^:0,^tileSymbol^:^¥^,^tilesetIdx^:^0^},^4-15^:{^x^:0,^y^:0,^tileSymbol^:^¥^,^tilesetIdx^:^0^},^4-16^:{^x^:0,^y^:0,^tileSymbol^:^¥^,^tilesetIdx^:^0^},^4-17^:{^x^:0,^y^:0,^tileSymbol^:^¥^,^tilesetIdx^:^0^},^4-18^:{^x^:0,^y^:0,^tileSymbol^:^¥^,^tilesetIdx^:^0^},^5-10^:{^x^:0,^y^:0,^tileSymbol^:^¥^,^tilesetIdx^:^0^},^5-11^:{^x^:0,^y^:0,^tileSymbol^:^¥^,^tilesetIdx^:^0^},^5-12^:{^x^:0,^y^:0,^tileSymbol^:^¥^,^tilesetIdx^:^0^},^5-13^:{^x^:0,^y^:0,^tileSymbol^:^¥^,^tilesetIdx^:^0^},^5-14^:{^x^:0,^y^:0,^tileSymbol^:^¥^,^tilesetIdx^:^0^},^5-15^:{^x^:0,^y^:0,^tileSymbol^:^¥^,^tilesetIdx^:^0^},^5-16^:{^x^:0,^y^:0,^tileSymbol^:^¥^,^tilesetIdx^:^0^},^5-17^:{^x^:0,^y^:0,^tileSymbol^:^¥^,^tilesetIdx^:^0^},^5-18^:{^x^:0,^y^:0,^tileSymbol^:^¥^,^tilesetIdx^:^0^},^6-10^:{^x^:0,^y^:0,^tileSymbol^:^¥^,^tilesetIdx^:^0^},^6-11^:{^x^:0,^y^:0,^tileSymbol^:^¥^,^tilesetIdx^:^0^},^6-12^:{^x^:0,^y^:0,^tileSymbol^:^¥^,^tilesetIdx^:^0^},^6-13^:{^x^:0,^y^:0,^tileSymbol^:^¥^,^tilesetIdx^:^0^},^6-14^:{^x^:0,^y^:0,^tileSymbol^:^¥^,^tilesetIdx^:^0^},^6-15^:{^x^:0,^y^:0,^tileSymbol^:^¥^,^tilesetIdx^:^0^},^6-16^:{^x^:0,^y^:0,^tileSymbol^:^¥^,^tilesetIdx^:^0^},^6-17^:{^x^:0,^y^:0,^tileSymbol^:^¥^,^tilesetIdx^:^0^},^6-18^:{^x^:0,^y^:0,^isFlippedX^:false,^tileSymbol^:^¥^,^tilesetIdx^:^0^},^7-10^:{^x^:0,^y^:0,^tileSymbol^:^¥^,^tilesetIdx^:^0^},^7-11^:{^x^:0,^y^:0,^tileSymbol^:^¥^,^tilesetIdx^:^0^},^7-12^:{^x^:0,^y^:0,^tileSymbol^:^¥^,^tilesetIdx^:^0^},^7-13^:{^x^:0,^y^:0,^tileSymbol^:^¥^,^tilesetIdx^:^0^},^7-14^:{^x^:0,^y^:0,^tileSymbol^:^¥^,^tilesetIdx^:^0^},^7-15^:{^x^:0,^y^:0,^tileSymbol^:^¥^,^tilesetIdx^:^0^},^7-16^:{^x^:0,^y^:0,^tileSymbol^:^¥^,^tilesetIdx^:^0^},^7-17^:{^x^:0,^y^:0,^tileSymbol^:^¥^,^tilesetIdx^:^0^},^7-18^:{^x^:0,^y^:0,^tileSymbol^:^¥^,^tilesetIdx^:^0^},^8-10^:{^x^:0,^y^:0,^tileSymbol^:^¥^,^tilesetIdx^:^0^},^8-11^:{^x^:0,^y^:0,^tileSymbol^:^¥^,^tilesetIdx^:^0^},^8-12^:{^x^:0,^y^:0,^tileSymbol^:^¥^,^tilesetIdx^:^0^},^8-13^:{^x^:0,^y^:0,^tileSymbol^:^¥^,^tilesetIdx^:^0^},^8-14^:{^x^:0,^y^:0,^tileSymbol^:^¥^,^tilesetIdx^:^0^},^8-15^:{^x^:0,^y^:0,^tileSymbol^:^¥^,^tilesetIdx^:^0^},^8-16^:{^x^:0,^y^:0,^tileSymbol^:^¥^,^tilesetIdx^:^0^},^8-17^:{^x^:0,^y^:0,^tileSymbol^:^¥^,^tilesetIdx^:^0^},^8-18^:{^x^:0,^y^:0,^tileSymbol^:^¥^,^tilesetIdx^:^0^},^8-19^:{^x^:0,^y^:0,^tileSymbol^:^¥^,^tilesetIdx^:^0^},^9-10^:{^x^:0,^y^:0,^tileSymbol^:^¥^,^tilesetIdx^:^0^},^9-11^:{^x^:0,^y^:0,^tileSymbol^:^¥^,^tilesetIdx^:^0^},^9-12^:{^x^:0,^y^:0,^tileSymbol^:^¥^,^tilesetIdx^:^0^},^9-13^:{^x^:0,^y^:0,^tileSymbol^:^¥^,^tilesetIdx^:^0^},^9-14^:{^x^:0,^y^:0,^tileSymbol^:^¥^,^tilesetIdx^:^0^},^9-15^:{^x^:0,^y^:0,^tileSymbol^:^¥^,^tilesetIdx^:^0^},^9-16^:{^x^:0,^y^:0,^tileSymbol^:^¥^,^tilesetIdx^:^0^},^9-17^:{^x^:0,^y^:0,^tileSymbol^:^¥^,^tilesetIdx^:^0^},^9-18^:{^x^:0,^y^:0,^tileSymbol^:^¥^,^tilesetIdx^:^0^},^10-11^:{^x^:0,^y^:0,^tileSymbol^:^¥^,^tilesetIdx^:^0^}},^opacity^:1,^visible^:true,^animatedTiles^:{}},{^name^:^item-base^,^tiles^:{^0-0^:{^x^:1,^y^:6,^tileSymbol^:^Ö^,^tilesetIdx^:^0^},^0-2^:{^x^:0,^y^:5,^tileSymbol^:^Í^,^tilesetIdx^:^0^},^0-5^:{^x^:2,^y^:6,^tileSymbol^:^×^,^tilesetIdx^:^0^},^0-6^:{^x^:2,^y^:5,^tileSymbol^:^Ï^,^tilesetIdx^:^0^},^0-8^:{^x^:0,^y^:6,^tileSymbol^:^Õ^,^tilesetIdx^:^0^},^1-4^:{^x^:0,^y^:7,^tileSymbol^:^Ý^,^tilesetIdx^:^0^},^1-5^:{^x^:2,^y^:7,^tileSymbol^:^ß^,^tilesetIdx^:^0^},^1-9^:{^x^:1,^y^:5,^tileSymbol^:^Î^,^tilesetIdx^:^0^},^3-0^:{^x^:0,^y^:6,^tileSymbol^:^Õ^,^tilesetIdx^:^0^},^6-0^:{^x^:6,^y^:107,^isFlippedX^:false,^tileSymbol^:^Ѓ^,^tilesetIdx^:^0^},^6-2^:{^x^:0,^y^:8,^tileSymbol^:^å^,^tilesetIdx^:^0^},^7-2^:{^x^:1,^y^:8,^tileSymbol^:^æ^,^tilesetIdx^:^0^},^7-7^:{^x^:1,^y^:5,^tileSymbol^:^Î^,^tilesetIdx^:^0^},^7-9^:{^x^:2,^y^:7,^tileSymbol^:^ß^,^tilesetIdx^:^0^},^8-0^:{^x^:1,^y^:6,^tileSymbol^:^Ö^,^tilesetIdx^:^0^},^8-1^:{^x^:1,^y^:6,^tileSymbol^:^Ö^,^tilesetIdx^:^0^},^8-3^:{^x^:0,^y^:6,^tileSymbol^:^Õ^,^tilesetIdx^:^0^},^8-4^:{^x^:2,^y^:7,^tileSymbol^:^ß^,^tilesetIdx^:^0^},^8-7^:{^x^:2,^y^:6,^tileSymbol^:^×^,^tilesetIdx^:^0^},^8-8^:{^x^:1,^y^:6,^tileSymbol^:^Ö^,^tilesetIdx^:^0^},^9-4^:{^x^:2,^y^:7,^tileSymbol^:^ß^,^tilesetIdx^:^0^},^9-5^:{^x^:1,^y^:6,^tileSymbol^:^Ö^,^tilesetIdx^:^0^},^9-6^:{^x^:0,^y^:7,^tileSymbol^:^Ý^,^tilesetIdx^:^0^}},^opacity^:1,^visible^:true,^animatedTiles^:{}},{^name^:^road^,^tiles^:{^1-1^:{^x^:5,^y^:0,^isFlippedX^:false,^tileSymbol^:^ª^,^tilesetIdx^:^0^},^1-2^:{^x^:5,^y^:0,^isFlippedX^:false,^tileSymbol^:^ª^,^tilesetIdx^:^0^},^1-3^:{^x^:5,^y^:0,^isFlippedX^:false,^tileSymbol^:^ª^,^tilesetIdx^:^0^},^2-1^:{^x^:5,^y^:0,^isFlippedX^:false,^tileSymbol^:^ª^,^tilesetIdx^:^0^},^2-3^:{^x^:5,^y^:0,^isFlippedX^:false,^tileSymbol^:^ª^,^tilesetIdx^:^0^},^3-1^:{^x^:5,^y^:0,^isFlippedX^:false,^tileSymbol^:^ª^,^tilesetIdx^:^0^},^3-3^:{^x^:5,^y^:0,^isFlippedX^:false,^tileSymbol^:^ª^,^tilesetIdx^:^0^},^3-6^:{^x^:5,^y^:0,^isFlippedX^:false,^tileSymbol^:^ª^,^tilesetIdx^:^0^},^3-7^:{^x^:5,^y^:0,^isFlippedX^:false,^tileSymbol^:^ª^,^tilesetIdx^:^0^},^3-8^:{^x^:5,^y^:0,^isFlippedX^:false,^tileSymbol^:^ª^,^tilesetIdx^:^0^},^3-9^:{^x^:5,^y^:0,^isFlippedX^:false,^tileSymbol^:^ª^,^tilesetIdx^:^0^},^4-1^:{^x^:5,^y^:0,^isFlippedX^:false,^tileSymbol^:^ª^,^tilesetIdx^:^0^},^4-3^:{^x^:5,^y^:0,^isFlippedX^:false,^tileSymbol^:^ª^,^tilesetIdx^:^0^},^4-4^:{^x^:5,^y^:0,^isFlippedX^:false,^tileSymbol^:^ª^,^tilesetIdx^:^0^},^4-6^:{^x^:5,^y^:0,^isFlippedX^:false,^tileSymbol^:^ª^,^tilesetIdx^:^0^},^5-1^:{^x^:5,^y^:0,^isFlippedX^:false,^tileSymbol^:^ª^,^tilesetIdx^:^0^},^5-4^:{^x^:5,^y^:0,^isFlippedX^:false,^tileSymbol^:^ª^,^tilesetIdx^:^0^},^5-6^:{^x^:5,^y^:0,^isFlippedX^:false,^tileSymbol^:^ª^,^tilesetIdx^:^0^},^6-1^:{^x^:5,^y^:0,^isFlippedX^:false,^tileSymbol^:^ª^,^tilesetIdx^:^0^},^6-4^:{^x^:5,^y^:0,^isFlippedX^:false,^tileSymbol^:^ª^,^tilesetIdx^:^0^},^6-5^:{^x^:5,^y^:0,^isFlippedX^:false,^tileSymbol^:^ª^,^tilesetIdx^:^0^},^6-6^:{^x^:5,^y^:0,^isFlippedX^:false,^tileSymbol^:^ª^,^tilesetIdx^:^0^},^2-14^:{^x^:5,^y^:0,^isFlippedX^:false,^tileSymbol^:^ª^,^tilesetIdx^:^0^},^2-15^:{^x^:5,^y^:0,^isFlippedX^:false,^tileSymbol^:^ª^,^tilesetIdx^:^0^},^2-16^:{^x^:5,^y^:0,^isFlippedX^:false,^tileSymbol^:^ª^,^tilesetIdx^:^0^},^2-18^:{^x^:5,^y^:0,^isFlippedX^:false,^tileSymbol^:^ª^,^tilesetIdx^:^0^},^3-10^:{^x^:5,^y^:0,^isFlippedX^:false,^tileSymbol^:^ª^,^tilesetIdx^:^0^},^3-11^:{^x^:5,^y^:0,^isFlippedX^:false,^tileSymbol^:^ª^,^tilesetIdx^:^0^},^3-12^:{^x^:5,^y^:0,^isFlippedX^:false,^tileSymbol^:^ª^,^tilesetIdx^:^0^},^3-14^:{^x^:5,^y^:0,^isFlippedX^:false,^tileSymbol^:^ª^,^tilesetIdx^:^0^},^3-16^:{^x^:5,^y^:0,^isFlippedX^:false,^tileSymbol^:^ª^,^tilesetIdx^:^0^},^3-18^:{^x^:5,^y^:0,^isFlippedX^:false,^tileSymbol^:^ª^,^tilesetIdx^:^0^},^4-12^:{^x^:5,^y^:0,^isFlippedX^:false,^tileSymbol^:^ª^,^tilesetIdx^:^0^},^4-14^:{^x^:5,^y^:0,^isFlippedX^:false,^tileSymbol^:^ª^,^tilesetIdx^:^0^},^4-16^:{^x^:5,^y^:0,^isFlippedX^:false,^tileSymbol^:^ª^,^tilesetIdx^:^0^},^4-18^:{^x^:5,^y^:0,^isFlippedX^:false,^tileSymbol^:^ª^,^tilesetIdx^:^0^},^5-12^:{^x^:5,^y^:0,^isFlippedX^:false,^tileSymbol^:^ª^,^tilesetIdx^:^0^},^5-14^:{^x^:5,^y^:0,^isFlippedX^:false,^tileSymbol^:^ª^,^tilesetIdx^:^0^},^5-16^:{^x^:5,^y^:0,^isFlippedX^:false,^tileSymbol^:^ª^,^tilesetIdx^:^0^},^5-18^:{^x^:5,^y^:0,^isFlippedX^:false,^tileSymbol^:^ª^,^tilesetIdx^:^0^},^6-12^:{^x^:5,^y^:0,^isFlippedX^:false,^tileSymbol^:^ª^,^tilesetIdx^:^0^},^6-14^:{^x^:5,^y^:0,^isFlippedX^:false,^tileSymbol^:^ª^,^tilesetIdx^:^0^},^6-16^:{^x^:5,^y^:0,^isFlippedX^:false,^tileSymbol^:^ª^,^tilesetIdx^:^0^},^6-17^:{^x^:5,^y^:0,^isFlippedX^:false,^tileSymbol^:^ª^,^tilesetIdx^:^0^},^6-18^:{^x^:5,^y^:0,^isFlippedX^:false,^tileSymbol^:^ª^,^tilesetIdx^:^0^},^7-12^:{^x^:5,^y^:0,^isFlippedX^:false,^tileSymbol^:^ª^,^tilesetIdx^:^0^},^7-13^:{^x^:5,^y^:0,^isFlippedX^:false,^tileSymbol^:^ª^,^tilesetIdx^:^0^},^7-14^:{^x^:5,^y^:0,^isFlippedX^:false,^tileSymbol^:^ª^,^tilesetIdx^:^0^}},^opacity^:1,^visible^:true,^animatedTiles^:{}},{^name^:^item-road^,^tiles^:{^1-3^:{^x^:2,^y^:28,^tileSymbol^:^Ƈ^,^tilesetIdx^:^0^},^2-1^:{^x^:3,^y^:8,^tileSymbol^:^è^,^tilesetIdx^:^0^},^2-3^:{^x^:5,^y^:8,^isFlippedX^:false,^tileSymbol^:^ê^,^tilesetIdx^:^0^},^3-6^:{^x^:3,^y^:8,^tileSymbol^:^è^,^tilesetIdx^:^0^},^3-9^:{^x^:2,^y^:28,^isFlippedX^:false,^tileSymbol^:^Ƈ^,^tilesetIdx^:^0^},^4-1^:{^x^:7,^y^:132,^tileSymbol^:^ӌ^,^tilesetIdx^:^0^},^4-3^:{^x^:3,^y^:8,^tileSymbol^:^è^,^tilesetIdx^:^0^},^4-4^:{^x^:2,^y^:28,^tileSymbol^:^Ƈ^,^tilesetIdx^:^0^},^4-6^:{^x^:2,^y^:28,^tileSymbol^:^Ƈ^,^tilesetIdx^:^0^},^6-5^:{^x^:3,^y^:8,^tileSymbol^:^è^,^tilesetIdx^:^0^},^2-15^:{^x^:3,^y^:8,^isFlippedX^:false,^tileSymbol^:^è^,^tilesetIdx^:^0^},^3-11^:{^x^:5,^y^:8,^isFlippedX^:false,^tileSymbol^:^ê^,^tilesetIdx^:^0^},^4-16^:{^x^:5,^y^:8,^isFlippedX^:false,^tileSymbol^:^ê^,^tilesetIdx^:^0^},^5-12^:{^x^:3,^y^:8,^isFlippedX^:false,^tileSymbol^:^è^,^tilesetIdx^:^0^},^6-16^:{^x^:2,^y^:28,^isFlippedX^:false,^tileSymbol^:^Ƈ^,^tilesetIdx^:^0^},^7-13^:{^x^:5,^y^:8,^isFlippedX^:false,^tileSymbol^:^ê^,^tilesetIdx^:^0^}},^opacity^:1,^visible^:true,^animatedTiles^:{}},{^name^:^charater^,^tiles^:{^2-17^:{^x^:3,^y^:19,^isFlippedX^:false,^tileSymbol^:^ŀ^,^tilesetIdx^:^0^},^2-18^:{^x^:3,^y^:20,^isFlippedX^:false,^tileSymbol^:^ň^,^tilesetIdx^:^0^},^6-19^:{^x^:3,^y^:20,^isFlippedX^:false,^tileSymbol^:^ň^,^tilesetIdx^:^0^}},^opacity^:1,^visible^:true,^animatedTiles^:{}}],^mapWidth^:10,^tileSize^:32,^gridColor^:^#00FFFF^,^mapHeight^:19},^multi_image^:{^name^:^multi_image^,^width^:320,^height^:320,^layers^:[{^name^:^base^,^tiles^:{^0-0^:{^x^:0,^y^:0,^isFlippedX^:false,^tileSymbol^:^¥^,^tilesetIdx^:^0^},^0-1^:{^x^:0,^y^:0,^isFlippedX^:false,^tileSymbol^:^¥^,^tilesetIdx^:^0^},^0-2^:{^x^:0,^y^:0,^isFlippedX^:false,^tileSymbol^:^¥^,^tilesetIdx^:^0^},^0-3^:{^x^:0,^y^:0,^isFlippedX^:false,^tileSymbol^:^¥^,^tilesetIdx^:^0^},^0-4^:{^x^:0,^y^:0,^isFlippedX^:false,^tileSymbol^:^¥^,^tilesetIdx^:^0^},^0-5^:{^x^:0,^y^:0,^isFlippedX^:false,^tileSymbol^:^¥^,^tilesetIdx^:^0^},^0-6^:{^x^:0,^y^:0,^isFlippedX^:false,^tileSymbol^:^¥^,^tilesetIdx^:^0^},^0-7^:{^x^:0,^y^:0,^isFlippedX^:false,^tileSymbol^:^¥^,^tilesetIdx^:^0^},^0-8^:{^x^:0,^y^:0,^isFlippedX^:false,^tileSymbol^:^¥^,^tilesetIdx^:^0^},^0-9^:{^x^:0,^y^:0,^isFlippedX^:false,^tileSymbol^:^¥^,^tilesetIdx^:^0^},^1-0^:{^x^:0,^y^:0,^isFlippedX^:false,^tileSymbol^:^¥^,^tilesetIdx^:^0^},^1-1^:{^x^:0,^y^:0,^isFlippedX^:false,^tileSymbol^:^¥^,^tilesetIdx^:^0^},^1-2^:{^x^:0,^y^:0,^isFlippedX^:false,^tileSymbol^:^¥^,^tilesetIdx^:^0^},^1-3^:{^x^:0,^y^:0,^isFlippedX^:false,^tileSymbol^:^¥^,^tilesetIdx^:^0^},^1-4^:{^x^:0,^y^:0,^isFlippedX^:false,^tileSymbol^:^¥^,^tilesetIdx^:^0^},^1-5^:{^x^:0,^y^:0,^isFlippedX^:false,^tileSymbol^:^¥^,^tilesetIdx^:^0^},^1-6^:{^x^:0,^y^:0,^isFlippedX^:false,^tileSymbol^:^¥^,^tilesetIdx^:^0^},^1-7^:{^x^:0,^y^:0,^isFlippedX^:false,^tileSymbol^:^¥^,^tilesetIdx^:^0^},^1-8^:{^x^:0,^y^:0,^isFlippedX^:false,^tileSymbol^:^¥^,^tilesetIdx^:^0^},^1-9^:{^x^:0,^y^:0,^isFlippedX^:false,^tileSymbol^:^¥^,^tilesetIdx^:^0^},^2-0^:{^x^:0,^y^:0,^isFlippedX^:false,^tileSymbol^:^¥^,^tilesetIdx^:^0^},^2-1^:{^x^:0,^y^:0,^isFlippedX^:false,^tileSymbol^:^¥^,^tilesetIdx^:^0^},^2-2^:{^x^:0,^y^:0,^isFlippedX^:false,^tileSymbol^:^¥^,^tilesetIdx^:^0^},^2-3^:{^x^:0,^y^:0,^isFlippedX^:false,^tileSymbol^:^¥^,^tilesetIdx^:^0^},^2-4^:{^x^:0,^y^:0,^isFlippedX^:false,^tileSymbol^:^¥^,^tilesetIdx^:^0^},^2-5^:{^x^:0,^y^:0,^isFlippedX^:false,^tileSymbol^:^¥^,^tilesetIdx^:^0^},^2-6^:{^x^:0,^y^:0,^isFlippedX^:false,^tileSymbol^:^¥^,^tilesetIdx^:^0^},^2-7^:{^x^:0,^y^:0,^isFlippedX^:false,^tileSymbol^:^¥^,^tilesetIdx^:^0^},^2-8^:{^x^:0,^y^:0,^isFlippedX^:false,^tileSymbol^:^¥^,^tilesetIdx^:^0^},^2-9^:{^x^:0,^y^:0,^isFlippedX^:false,^tileSymbol^:^¥^,^tilesetIdx^:^0^},^3-0^:{^x^:0,^y^:0,^isFlippedX^:false,^tileSymbol^:^¥^,^tilesetIdx^:^0^},^3-1^:{^x^:0,^y^:0,^isFlippedX^:false,^tileSymbol^:^¥^,^tilesetIdx^:^0^},^3-2^:{^x^:0,^y^:0,^isFlippedX^:false,^tileSymbol^:^¥^,^tilesetIdx^:^0^},^3-3^:{^x^:0,^y^:0,^isFlippedX^:false,^tileSymbol^:^¥^,^tilesetIdx^:^0^},^3-4^:{^x^:0,^y^:0,^isFlippedX^:false,^tileSymbol^:^¥^,^tilesetIdx^:^0^},^3-5^:{^x^:0,^y^:0,^isFlippedX^:false,^tileSymbol^:^¥^,^tilesetIdx^:^0^},^3-6^:{^x^:0,^y^:0,^isFlippedX^:false,^tileSymbol^:^¥^,^tilesetIdx^:^0^},^3-7^:{^x^:0,^y^:0,^isFlippedX^:false,^tileSymbol^:^¥^,^tilesetIdx^:^0^},^3-8^:{^x^:0,^y^:0,^isFlippedX^:false,^tileSymbol^:^¥^,^tilesetIdx^:^0^},^3-9^:{^x^:0,^y^:0,^isFlippedX^:false,^tileSymbol^:^¥^,^tilesetIdx^:^0^},^4-0^:{^x^:0,^y^:0,^isFlippedX^:false,^tileSymbol^:^¥^,^tilesetIdx^:^0^},^4-1^:{^x^:0,^y^:0,^isFlippedX^:false,^tileSymbol^:^¥^,^tilesetIdx^:^0^},^4-2^:{^x^:0,^y^:0,^isFlippedX^:false,^tileSymbol^:^¥^,^tilesetIdx^:^0^},^4-3^:{^x^:0,^y^:0,^isFlippedX^:false,^tileSymbol^:^¥^,^tilesetIdx^:^0^},^4-4^:{^x^:0,^y^:0,^isFlippedX^:false,^tileSymbol^:^¥^,^tilesetIdx^:^0^},^4-5^:{^x^:0,^y^:0,^isFlippedX^:false,^tileSymbol^:^¥^,^tilesetIdx^:^0^},^4-6^:{^x^:0,^y^:0,^isFlippedX^:false,^tileSymbol^:^¥^,^tilesetIdx^:^0^},^4-7^:{^x^:0,^y^:0,^isFlippedX^:false,^tileSymbol^:^¥^,^tilesetIdx^:^0^},^4-8^:{^x^:0,^y^:0,^isFlippedX^:false,^tileSymbol^:^¥^,^tilesetIdx^:^0^},^4-9^:{^x^:0,^y^:0,^isFlippedX^:false,^tileSymbol^:^¥^,^tilesetIdx^:^0^},^5-0^:{^x^:0,^y^:0,^isFlippedX^:false,^tileSymbol^:^¥^,^tilesetIdx^:^0^},^5-1^:{^x^:0,^y^:0,^isFlippedX^:false,^tileSymbol^:^¥^,^tilesetIdx^:^0^},^5-2^:{^x^:0,^y^:0,^isFlippedX^:false,^tileSymbol^:^¥^,^tilesetIdx^:^0^},^5-3^:{^x^:0,^y^:0,^isFlippedX^:false,^tileSymbol^:^¥^,^tilesetIdx^:^0^},^5-4^:{^x^:0,^y^:0,^isFlippedX^:false,^tileSymbol^:^¥^,^tilesetIdx^:^0^},^5-5^:{^x^:0,^y^:0,^isFlippedX^:false,^tileSymbol^:^¥^,^tilesetIdx^:^0^},^5-6^:{^x^:0,^y^:0,^isFlippedX^:false,^tileSymbol^:^¥^,^tilesetIdx^:^0^},^5-7^:{^x^:0,^y^:0,^isFlippedX^:false,^tileSymbol^:^¥^,^tilesetIdx^:^0^},^5-8^:{^x^:0,^y^:0,^isFlippedX^:false,^tileSymbol^:^¥^,^tilesetIdx^:^0^},^5-9^:{^x^:0,^y^:0,^isFlippedX^:false,^tileSymbol^:^¥^,^tilesetIdx^:^0^},^6-0^:{^x^:0,^y^:0,^isFlippedX^:false,^tileSymbol^:^¥^,^tilesetIdx^:^0^},^6-1^:{^x^:0,^y^:0,^isFlippedX^:false,^tileSymbol^:^¥^,^tilesetIdx^:^0^},^6-2^:{^x^:0,^y^:0,^isFlippedX^:false,^tileSymbol^:^¥^,^tilesetIdx^:^0^},^6-3^:{^x^:0,^y^:0,^isFlippedX^:false,^tileSymbol^:^¥^,^tilesetIdx^:^0^},^6-4^:{^x^:0,^y^:0,^isFlippedX^:false,^tileSymbol^:^¥^,^tilesetIdx^:^0^},^6-5^:{^x^:0,^y^:0,^isFlippedX^:false,^tileSymbol^:^¥^,^tilesetIdx^:^0^},^6-6^:{^x^:0,^y^:0,^isFlippedX^:false,^tileSymbol^:^¥^,^tilesetIdx^:^0^},^6-7^:{^x^:0,^y^:0,^isFlippedX^:false,^tileSymbol^:^¥^,^tilesetIdx^:^0^},^6-8^:{^x^:0,^y^:0,^isFlippedX^:false,^tileSymbol^:^¥^,^tilesetIdx^:^0^},^6-9^:{^x^:0,^y^:0,^isFlippedX^:false,^tileSymbol^:^¥^,^tilesetIdx^:^0^},^7-0^:{^x^:0,^y^:0,^isFlippedX^:false,^tileSymbol^:^¥^,^tilesetIdx^:^0^},^7-1^:{^x^:0,^y^:0,^isFlippedX^:false,^tileSymbol^:^¥^,^tilesetIdx^:^0^},^7-2^:{^x^:0,^y^:0,^isFlippedX^:false,^tileSymbol^:^¥^,^tilesetIdx^:^0^},^7-3^:{^x^:0,^y^:0,^isFlippedX^:false,^tileSymbol^:^¥^,^tilesetIdx^:^0^},^7-4^:{^x^:0,^y^:0,^isFlippedX^:false,^tileSymbol^:^¥^,^tilesetIdx^:^0^},^7-5^:{^x^:0,^y^:0,^isFlippedX^:false,^tileSymbol^:^¥^,^tilesetIdx^:^0^},^7-6^:{^x^:0,^y^:0,^isFlippedX^:false,^tileSymbol^:^¥^,^tilesetIdx^:^0^},^7-7^:{^x^:0,^y^:0,^isFlippedX^:false,^tileSymbol^:^¥^,^tilesetIdx^:^0^},^7-8^:{^x^:0,^y^:0,^isFlippedX^:false,^tileSymbol^:^¥^,^tilesetIdx^:^0^},^7-9^:{^x^:0,^y^:0,^isFlippedX^:false,^tileSymbol^:^¥^,^tilesetIdx^:^0^},^8-0^:{^x^:0,^y^:0,^isFlippedX^:false,^tileSymbol^:^¥^,^tilesetIdx^:^0^},^8-1^:{^x^:0,^y^:0,^isFlippedX^:false,^tileSymbol^:^¥^,^tilesetIdx^:^0^},^8-2^:{^x^:0,^y^:0,^isFlippedX^:false,^tileSymbol^:^¥^,^tilesetIdx^:^0^},^8-3^:{^x^:0,^y^:0,^isFlippedX^:false,^tileSymbol^:^¥^,^tilesetIdx^:^0^},^8-4^:{^x^:0,^y^:0,^isFlippedX^:false,^tileSymbol^:^¥^,^tilesetIdx^:^0^},^8-5^:{^x^:0,^y^:0,^isFlippedX^:false,^tileSymbol^:^¥^,^tilesetIdx^:^0^},^8-6^:{^x^:0,^y^:0,^isFlippedX^:false,^tileSymbol^:^¥^,^tilesetIdx^:^0^},^8-7^:{^x^:0,^y^:0,^isFlippedX^:false,^tileSymbol^:^¥^,^tilesetIdx^:^0^},^8-8^:{^x^:0,^y^:0,^isFlippedX^:false,^tileSymbol^:^¥^,^tilesetIdx^:^0^},^8-9^:{^x^:0,^y^:0,^isFlippedX^:false,^tileSymbol^:^¥^,^tilesetIdx^:^0^},^9-0^:{^x^:0,^y^:0,^isFlippedX^:false,^tileSymbol^:^¥^,^tilesetIdx^:^0^},^9-1^:{^x^:0,^y^:0,^isFlippedX^:false,^tileSymbol^:^¥^,^tilesetIdx^:^0^},^9-2^:{^x^:0,^y^:0,^isFlippedX^:false,^tileSymbol^:^¥^,^tilesetIdx^:^0^},^9-3^:{^x^:0,^y^:0,^isFlippedX^:false,^tileSymbol^:^¥^,^tilesetIdx^:^0^},^9-4^:{^x^:0,^y^:0,^isFlippedX^:false,^tileSymbol^:^¥^,^tilesetIdx^:^0^},^9-5^:{^x^:0,^y^:0,^isFlippedX^:false,^tileSymbol^:^¥^,^tilesetIdx^:^0^},^9-6^:{^x^:0,^y^:0,^isFlippedX^:false,^tileSymbol^:^¥^,^tilesetIdx^:^0^},^9-7^:{^x^:0,^y^:0,^isFlippedX^:false,^tileSymbol^:^¥^,^tilesetIdx^:^0^},^9-8^:{^x^:0,^y^:0,^isFlippedX^:false,^tileSymbol^:^¥^,^tilesetIdx^:^0^},^9-9^:{^x^:0,^y^:0,^isFlippedX^:false,^tileSymbol^:^¥^,^tilesetIdx^:^0^},^0-10^:{^x^:0,^y^:0,^tileSymbol^:^¥^,^tilesetIdx^:^0^},^0-11^:{^x^:0,^y^:0,^tileSymbol^:^¥^,^tilesetIdx^:^0^},^0-12^:{^x^:0,^y^:0,^tileSymbol^:^¥^,^tilesetIdx^:^0^},^0-13^:{^x^:0,^y^:0,^tileSymbol^:^¥^,^tilesetIdx^:^0^},^0-14^:{^x^:0,^y^:0,^tileSymbol^:^¥^,^tilesetIdx^:^0^},^0-15^:{^x^:0,^y^:0,^tileSymbol^:^¥^,^tilesetIdx^:^0^},^0-16^:{^x^:0,^y^:0,^tileSymbol^:^¥^,^tilesetIdx^:^0^},^0-17^:{^x^:0,^y^:0,^tileSymbol^:^¥^,^tilesetIdx^:^0^},^0-18^:{^x^:0,^y^:0,^tileSymbol^:^¥^,^tilesetIdx^:^0^},^0-19^:{^x^:0,^y^:0,^tileSymbol^:^¥^,^tilesetIdx^:^0^},^1-10^:{^x^:0,^y^:0,^tileSymbol^:^¥^,^tilesetIdx^:^0^},^1-11^:{^x^:0,^y^:0,^tileSymbol^:^¥^,^tilesetIdx^:^0^},^1-12^:{^x^:0,^y^:0,^tileSymbol^:^¥^,^tilesetIdx^:^0^},^1-13^:{^x^:0,^y^:0,^tileSymbol^:^¥^,^tilesetIdx^:^0^},^1-14^:{^x^:0,^y^:0,^tileSymbol^:^¥^,^tilesetIdx^:^0^},^1-15^:{^x^:0,^y^:0,^tileSymbol^:^¥^,^tilesetIdx^:^0^},^1-16^:{^x^:0,^y^:0,^tileSymbol^:^¥^,^tilesetIdx^:^0^},^1-17^:{^x^:0,^y^:0,^tileSymbol^:^¥^,^tilesetIdx^:^0^},^1-18^:{^x^:0,^y^:0,^tileSymbol^:^¥^,^tilesetIdx^:^0^},^1-19^:{^x^:0,^y^:0,^tileSymbol^:^¥^,^tilesetIdx^:^0^},^2-10^:{^x^:0,^y^:0,^tileSymbol^:^¥^,^tilesetIdx^:^0^},^2-11^:{^x^:0,^y^:0,^tileSymbol^:^¥^,^tilesetIdx^:^0^},^2-12^:{^x^:0,^y^:0,^tileSymbol^:^¥^,^tilesetIdx^:^0^},^2-13^:{^x^:0,^y^:0,^tileSymbol^:^¥^,^tilesetIdx^:^0^},^2-14^:{^x^:0,^y^:0,^tileSymbol^:^¥^,^tilesetIdx^:^0^},^2-15^:{^x^:0,^y^:0,^tileSymbol^:^¥^,^tilesetIdx^:^0^},^2-16^:{^x^:0,^y^:0,^tileSymbol^:^¥^,^tilesetIdx^:^0^},^2-17^:{^x^:0,^y^:0,^tileSymbol^:^¥^,^tilesetIdx^:^0^},^2-18^:{^x^:0,^y^:0,^tileSymbol^:^¥^,^tilesetIdx^:^0^},^3-10^:{^x^:0,^y^:0,^tileSymbol^:^¥^,^tilesetIdx^:^0^},^3-11^:{^x^:0,^y^:0,^tileSymbol^:^¥^,^tilesetIdx^:^0^},^3-12^:{^x^:0,^y^:0,^tileSymbol^:^¥^,^tilesetIdx^:^0^},^3-13^:{^x^:0,^y^:0,^tileSymbol^:^¥^,^tilesetIdx^:^0^},^3-14^:{^x^:0,^y^:0,^tileSymbol^:^¥^,^tilesetIdx^:^0^},^3-15^:{^x^:0,^y^:0,^tileSymbol^:^¥^,^tilesetIdx^:^0^},^3-16^:{^x^:0,^y^:0,^tileSymbol^:^¥^,^tilesetIdx^:^0^},^3-17^:{^x^:0,^y^:0,^tileSymbol^:^¥^,^tilesetIdx^:^0^},^3-18^:{^x^:0,^y^:0,^tileSymbol^:^¥^,^tilesetIdx^:^0^},^4-10^:{^x^:0,^y^:0,^tileSymbol^:^¥^,^tilesetIdx^:^0^},^4-11^:{^x^:0,^y^:0,^tileSymbol^:^¥^,^tilesetIdx^:^0^},^4-12^:{^x^:0,^y^:0,^tileSymbol^:^¥^,^tilesetIdx^:^0^},^4-13^:{^x^:0,^y^:0,^tileSymbol^:^¥^,^tilesetIdx^:^0^},^4-14^:{^x^:0,^y^:0,^tileSymbol^:^¥^,^tilesetIdx^:^0^},^4-15^:{^x^:0,^y^:0,^tileSymbol^:^¥^,^tilesetIdx^:^0^},^4-16^:{^x^:0,^y^:0,^tileSymbol^:^¥^,^tilesetIdx^:^0^},^4-17^:{^x^:0,^y^:0,^tileSymbol^:^¥^,^tilesetIdx^:^0^},^4-18^:{^x^:0,^y^:0,^tileSymbol^:^¥^,^tilesetIdx^:^0^},^5-10^:{^x^:0,^y^:0,^tileSymbol^:^¥^,^tilesetIdx^:^0^},^5-11^:{^x^:0,^y^:0,^tileSymbol^:^¥^,^tilesetIdx^:^0^},^5-12^:{^x^:0,^y^:0,^tileSymbol^:^¥^,^tilesetIdx^:^0^},^5-13^:{^x^:0,^y^:0,^tileSymbol^:^¥^,^tilesetIdx^:^0^},^5-14^:{^x^:0,^y^:0,^tileSymbol^:^¥^,^tilesetIdx^:^0^},^5-15^:{^x^:0,^y^:0,^tileSymbol^:^¥^,^tilesetIdx^:^0^},^5-16^:{^x^:0,^y^:0,^tileSymbol^:^¥^,^tilesetIdx^:^0^},^5-17^:{^x^:0,^y^:0,^tileSymbol^:^¥^,^tilesetIdx^:^0^},^5-18^:{^x^:0,^y^:0,^tileSymbol^:^¥^,^tilesetIdx^:^0^},^6-10^:{^x^:0,^y^:0,^tileSymbol^:^¥^,^tilesetIdx^:^0^},^6-11^:{^x^:0,^y^:0,^tileSymbol^:^¥^,^tilesetIdx^:^0^},^6-12^:{^x^:0,^y^:0,^tileSymbol^:^¥^,^tilesetIdx^:^0^},^6-13^:{^x^:0,^y^:0,^tileSymbol^:^¥^,^tilesetIdx^:^0^},^6-14^:{^x^:0,^y^:0,^tileSymbol^:^¥^,^tilesetIdx^:^0^},^6-15^:{^x^:0,^y^:0,^tileSymbol^:^¥^,^tilesetIdx^:^0^},^6-16^:{^x^:0,^y^:0,^tileSymbol^:^¥^,^tilesetIdx^:^0^},^6-17^:{^x^:0,^y^:0,^tileSymbol^:^¥^,^tilesetIdx^:^0^},^6-18^:{^x^:0,^y^:0,^tileSymbol^:^¥^,^tilesetIdx^:^0^},^7-10^:{^x^:0,^y^:0,^tileSymbol^:^¥^,^tilesetIdx^:^0^},^7-11^:{^x^:0,^y^:0,^tileSymbol^:^¥^,^tilesetIdx^:^0^},^7-12^:{^x^:0,^y^:0,^tileSymbol^:^¥^,^tilesetIdx^:^0^},^7-13^:{^x^:0,^y^:0,^tileSymbol^:^¥^,^tilesetIdx^:^0^},^7-14^:{^x^:0,^y^:0,^tileSymbol^:^¥^,^tilesetIdx^:^0^},^7-15^:{^x^:0,^y^:0,^tileSymbol^:^¥^,^tilesetIdx^:^0^},^7-16^:{^x^:0,^y^:0,^tileSymbol^:^¥^,^tilesetIdx^:^0^},^7-17^:{^x^:0,^y^:0,^tileSymbol^:^¥^,^tilesetIdx^:^0^},^7-18^:{^x^:0,^y^:0,^tileSymbol^:^¥^,^tilesetIdx^:^0^},^8-10^:{^x^:0,^y^:0,^tileSymbol^:^¥^,^tilesetIdx^:^0^},^8-11^:{^x^:0,^y^:0,^tileSymbol^:^¥^,^tilesetIdx^:^0^},^8-12^:{^x^:0,^y^:0,^tileSymbol^:^¥^,^tilesetIdx^:^0^},^8-13^:{^x^:0,^y^:0,^tileSymbol^:^¥^,^tilesetIdx^:^0^},^8-14^:{^x^:0,^y^:0,^tileSymbol^:^¥^,^tilesetIdx^:^0^},^8-15^:{^x^:0,^y^:0,^tileSymbol^:^¥^,^tilesetIdx^:^0^},^8-16^:{^x^:0,^y^:0,^tileSymbol^:^¥^,^tilesetIdx^:^0^},^8-17^:{^x^:0,^y^:0,^tileSymbol^:^¥^,^tilesetIdx^:^0^},^8-18^:{^x^:0,^y^:0,^tileSymbol^:^¥^,^tilesetIdx^:^0^},^8-19^:{^x^:0,^y^:0,^tileSymbol^:^¥^,^tilesetIdx^:^0^},^9-10^:{^x^:0,^y^:0,^tileSymbol^:^¥^,^tilesetIdx^:^0^},^9-11^:{^x^:0,^y^:0,^tileSymbol^:^¥^,^tilesetIdx^:^0^},^9-12^:{^x^:0,^y^:0,^tileSymbol^:^¥^,^tilesetIdx^:^0^},^9-13^:{^x^:0,^y^:0,^tileSymbol^:^¥^,^tilesetIdx^:^0^},^9-14^:{^x^:0,^y^:0,^tileSymbol^:^¥^,^tilesetIdx^:^0^},^9-15^:{^x^:0,^y^:0,^tileSymbol^:^¥^,^tilesetIdx^:^0^},^9-16^:{^x^:0,^y^:0,^tileSymbol^:^¥^,^tilesetIdx^:^0^},^9-17^:{^x^:0,^y^:0,^tileSymbol^:^¥^,^tilesetIdx^:^0^},^9-18^:{^x^:0,^y^:0,^tileSymbol^:^¥^,^tilesetIdx^:^0^},^10-11^:{^x^:0,^y^:0,^tileSymbol^:^¥^,^tilesetIdx^:^0^}},^opacity^:1,^visible^:true,^animatedTiles^:{}},{^name^:^item-base^,^tiles^:{^0-0^:{^x^:1,^y^:6,^tileSymbol^:^Ö^,^tilesetIdx^:^0^},^0-2^:{^x^:0,^y^:5,^tileSymbol^:^Í^,^tilesetIdx^:^0^},^0-5^:{^x^:2,^y^:6,^tileSymbol^:^×^,^tilesetIdx^:^0^},^0-6^:{^x^:2,^y^:5,^tileSymbol^:^Ï^,^tilesetIdx^:^0^},^0-8^:{^x^:0,^y^:6,^tileSymbol^:^Õ^,^tilesetIdx^:^0^},^1-4^:{^x^:0,^y^:7,^tileSymbol^:^Ý^,^tilesetIdx^:^0^},^1-5^:{^x^:2,^y^:7,^tileSymbol^:^ß^,^tilesetIdx^:^0^},^1-9^:{^x^:1,^y^:5,^tileSymbol^:^Î^,^tilesetIdx^:^0^},^3-0^:{^x^:0,^y^:6,^tileSymbol^:^Õ^,^tilesetIdx^:^0^},^6-0^:{^x^:6,^y^:107,^isFlippedX^:false,^tileSymbol^:^Ѓ^,^tilesetIdx^:^0^},^6-2^:{^x^:0,^y^:8,^tileSymbol^:^å^,^tilesetIdx^:^0^},^7-2^:{^x^:1,^y^:8,^tileSymbol^:^æ^,^tilesetIdx^:^0^},^7-7^:{^x^:1,^y^:5,^tileSymbol^:^Î^,^tilesetIdx^:^0^},^7-8^:{^x^:0,^y^:0,^isFlippedX^:false,^tileSymbol^:^Ӎ^,^tilesetIdx^:^1^},^7-9^:{^x^:2,^y^:7,^tileSymbol^:^ß^,^tilesetIdx^:^0^},^8-0^:{^x^:1,^y^:6,^tileSymbol^:^Ö^,^tilesetIdx^:^0^},^8-1^:{^x^:1,^y^:6,^tileSymbol^:^Ö^,^tilesetIdx^:^0^},^8-3^:{^x^:0,^y^:6,^tileSymbol^:^Õ^,^tilesetIdx^:^0^},^8-4^:{^x^:2,^y^:7,^tileSymbol^:^ß^,^tilesetIdx^:^0^},^8-5^:{^x^:3,^y^:1,^isFlippedX^:false,^tileSymbol^:^ӕ^,^tilesetIdx^:^1^},^8-6^:{^x^:3,^y^:2,^isFlippedX^:false,^tileSymbol^:^Ӛ^,^tilesetIdx^:^1^},^8-7^:{^x^:2,^y^:6,^tileSymbol^:^×^,^tilesetIdx^:^0^},^8-8^:{^x^:1,^y^:6,^tileSymbol^:^Ö^,^tilesetIdx^:^0^},^8-9^:{^x^:3,^y^:1,^isFlippedX^:false,^tileSymbol^:^ӕ^,^tilesetIdx^:^1^},^9-4^:{^x^:2,^y^:7,^tileSymbol^:^ß^,^tilesetIdx^:^0^},^9-5^:{^x^:1,^y^:6,^tileSymbol^:^Ö^,^tilesetIdx^:^0^},^9-6^:{^x^:0,^y^:7,^tileSymbol^:^Ý^,^tilesetIdx^:^0^},^8-10^:{^x^:3,^y^:2,^isFlippedX^:false,^tileSymbol^:^Ӛ^,^tilesetIdx^:^1^},^9-11^:{^x^:3,^y^:1,^isFlippedX^:false,^tileSymbol^:^ӕ^,^tilesetIdx^:^1^},^9-12^:{^x^:3,^y^:2,^isFlippedX^:false,^tileSymbol^:^Ӛ^,^tilesetIdx^:^1^}},^opacity^:1,^visible^:true,^animatedTiles^:{}},{^name^:^road^,^tiles^:{^1-1^:{^x^:5,^y^:0,^isFlippedX^:false,^tileSymbol^:^ª^,^tilesetIdx^:^0^},^1-2^:{^x^:5,^y^:0,^isFlippedX^:false,^tileSymbol^:^ª^,^tilesetIdx^:^0^},^1-3^:{^x^:5,^y^:0,^isFlippedX^:false,^tileSymbol^:^ª^,^tilesetIdx^:^0^},^2-1^:{^x^:5,^y^:0,^isFlippedX^:false,^tileSymbol^:^ª^,^tilesetIdx^:^0^},^2-3^:{^x^:5,^y^:0,^isFlippedX^:false,^tileSymbol^:^ª^,^tilesetIdx^:^0^},^3-1^:{^x^:5,^y^:0,^isFlippedX^:false,^tileSymbol^:^ª^,^tilesetIdx^:^0^},^3-3^:{^x^:5,^y^:0,^isFlippedX^:false,^tileSymbol^:^ª^,^tilesetIdx^:^0^},^3-6^:{^x^:5,^y^:0,^isFlippedX^:false,^tileSymbol^:^ª^,^tilesetIdx^:^0^},^3-7^:{^x^:5,^y^:0,^isFlippedX^:false,^tileSymbol^:^ª^,^tilesetIdx^:^0^},^3-8^:{^x^:5,^y^:0,^isFlippedX^:false,^tileSymbol^:^ª^,^tilesetIdx^:^0^},^3-9^:{^x^:5,^y^:0,^isFlippedX^:false,^tileSymbol^:^ª^,^tilesetIdx^:^0^},^4-1^:{^x^:5,^y^:0,^isFlippedX^:false,^tileSymbol^:^ª^,^tilesetIdx^:^0^},^4-3^:{^x^:5,^y^:0,^isFlippedX^:false,^tileSymbol^:^ª^,^tilesetIdx^:^0^},^4-4^:{^x^:5,^y^:0,^isFlippedX^:false,^tileSymbol^:^ª^,^tilesetIdx^:^0^},^4-6^:{^x^:5,^y^:0,^isFlippedX^:false,^tileSymbol^:^ª^,^tilesetIdx^:^0^},^5-1^:{^x^:5,^y^:0,^isFlippedX^:false,^tileSymbol^:^ª^,^tilesetIdx^:^0^},^5-4^:{^x^:5,^y^:0,^isFlippedX^:false,^tileSymbol^:^ª^,^tilesetIdx^:^0^},^5-6^:{^x^:5,^y^:0,^isFlippedX^:false,^tileSymbol^:^ª^,^tilesetIdx^:^0^},^6-1^:{^x^:5,^y^:0,^isFlippedX^:false,^tileSymbol^:^ª^,^tilesetIdx^:^0^},^6-4^:{^x^:5,^y^:0,^isFlippedX^:false,^tileSymbol^:^ª^,^tilesetIdx^:^0^},^6-5^:{^x^:5,^y^:0,^isFlippedX^:false,^tileSymbol^:^ª^,^tilesetIdx^:^0^},^6-6^:{^x^:5,^y^:0,^isFlippedX^:false,^tileSymbol^:^ª^,^tilesetIdx^:^0^},^2-14^:{^x^:5,^y^:0,^isFlippedX^:false,^tileSymbol^:^ª^,^tilesetIdx^:^0^},^2-15^:{^x^:5,^y^:0,^isFlippedX^:false,^tileSymbol^:^ª^,^tilesetIdx^:^0^},^2-16^:{^x^:5,^y^:0,^isFlippedX^:false,^tileSymbol^:^ª^,^tilesetIdx^:^0^},^3-10^:{^x^:5,^y^:0,^isFlippedX^:false,^tileSymbol^:^ª^,^tilesetIdx^:^0^},^3-11^:{^x^:5,^y^:0,^isFlippedX^:false,^tileSymbol^:^ª^,^tilesetIdx^:^0^},^3-12^:{^x^:5,^y^:0,^isFlippedX^:false,^tileSymbol^:^ª^,^tilesetIdx^:^0^},^3-14^:{^x^:5,^y^:0,^isFlippedX^:false,^tileSymbol^:^ª^,^tilesetIdx^:^0^},^3-16^:{^x^:5,^y^:0,^isFlippedX^:false,^tileSymbol^:^ª^,^tilesetIdx^:^0^},^4-12^:{^x^:5,^y^:0,^isFlippedX^:false,^tileSymbol^:^ª^,^tilesetIdx^:^0^},^4-14^:{^x^:5,^y^:0,^isFlippedX^:false,^tileSymbol^:^ª^,^tilesetIdx^:^0^},^4-16^:{^x^:5,^y^:0,^isFlippedX^:false,^tileSymbol^:^ª^,^tilesetIdx^:^0^},^5-12^:{^x^:5,^y^:0,^isFlippedX^:false,^tileSymbol^:^ª^,^tilesetIdx^:^0^},^5-14^:{^x^:5,^y^:0,^isFlippedX^:false,^tileSymbol^:^ª^,^tilesetIdx^:^0^},^5-16^:{^x^:5,^y^:0,^isFlippedX^:false,^tileSymbol^:^ª^,^tilesetIdx^:^0^},^6-12^:{^x^:5,^y^:0,^isFlippedX^:false,^tileSymbol^:^ª^,^tilesetIdx^:^0^},^6-14^:{^x^:5,^y^:0,^isFlippedX^:false,^tileSymbol^:^ª^,^tilesetIdx^:^0^},^6-16^:{^x^:5,^y^:0,^isFlippedX^:false,^tileSymbol^:^ª^,^tilesetIdx^:^0^},^6-17^:{^x^:5,^y^:0,^isFlippedX^:false,^tileSymbol^:^ª^,^tilesetIdx^:^0^},^6-18^:{^x^:5,^y^:0,^isFlippedX^:false,^tileSymbol^:^ª^,^tilesetIdx^:^0^},^7-12^:{^x^:5,^y^:0,^isFlippedX^:false,^tileSymbol^:^ª^,^tilesetIdx^:^0^},^7-13^:{^x^:5,^y^:0,^isFlippedX^:false,^tileSymbol^:^ª^,^tilesetIdx^:^0^},^7-14^:{^x^:5,^y^:0,^isFlippedX^:false,^tileSymbol^:^ª^,^tilesetIdx^:^0^}},^opacity^:1,^visible^:true,^animatedTiles^:{}},{^name^:^item-road^,^tiles^:{^1-3^:{^x^:2,^y^:28,^tileSymbol^:^Ƈ^,^tilesetIdx^:^0^},^2-1^:{^x^:3,^y^:8,^tileSymbol^:^è^,^tilesetIdx^:^0^},^3-6^:{^x^:3,^y^:8,^tileSymbol^:^è^,^tilesetIdx^:^0^},^3-9^:{^x^:2,^y^:28,^isFlippedX^:false,^tileSymbol^:^Ƈ^,^tilesetIdx^:^0^},^4-1^:{^x^:7,^y^:132,^tileSymbol^:^ӌ^,^tilesetIdx^:^0^},^4-3^:{^x^:3,^y^:8,^tileSymbol^:^è^,^tilesetIdx^:^0^},^4-4^:{^x^:2,^y^:28,^tileSymbol^:^Ƈ^,^tilesetIdx^:^0^},^4-6^:{^x^:2,^y^:28,^tileSymbol^:^Ƈ^,^tilesetIdx^:^0^},^6-5^:{^x^:3,^y^:8,^tileSymbol^:^è^,^tilesetIdx^:^0^},^2-15^:{^x^:3,^y^:8,^isFlippedX^:false,^tileSymbol^:^è^,^tilesetIdx^:^0^},^5-12^:{^x^:3,^y^:8,^isFlippedX^:false,^tileSymbol^:^è^,^tilesetIdx^:^0^},^6-16^:{^x^:2,^y^:28,^isFlippedX^:false,^tileSymbol^:^Ƈ^,^tilesetIdx^:^0^}},^opacity^:1,^visible^:true,^animatedTiles^:{}},{^name^:^charater^,^tiles^:{^6-17^:{^x^:3,^y^:19,^isFlippedX^:false,^tileSymbol^:^ŀ^,^tilesetIdx^:^0^},^6-18^:{^x^:3,^y^:20,^isFlippedX^:false,^tileSymbol^:^ň^,^tilesetIdx^:^0^},^6-19^:{^x^:3,^y^:20,^isFlippedX^:false,^tileSymbol^:^ň^,^tilesetIdx^:^0^}},^opacity^:1,^visible^:true,^animatedTiles^:{}}],^mapWidth^:10,^tileSize^:32,^gridColor^:^#00FFFF^,^mapHeight^:19}},^tileSets^:{^0^:{^src^:^https://i.ibb.co/KzSwmBv/ztwPZOI.png^,^name^:^tileset 0^,^tags^:{},^width^:256,^frames^:{},^height^:4256,^tileData^:{^0-0^:{^x^:0,^y^:0,^tileSymbol^:^¥^,^tilesetIdx^:^0^},^0-1^:{^x^:0,^y^:1,^tileSymbol^:^­^,^tilesetIdx^:^0^},^0-2^:{^x^:0,^y^:2,^tileSymbol^:^µ^,^tilesetIdx^:^0^},^0-3^:{^x^:0,^y^:3,^tileSymbol^:^½^,^tilesetIdx^:^0^},^0-4^:{^x^:0,^y^:4,^tileSymbol^:^Å^,^tilesetIdx^:^0^},^0-5^:{^x^:0,^y^:5,^tileSymbol^:^Í^,^tilesetIdx^:^0^},^0-6^:{^x^:0,^y^:6,^tileSymbol^:^Õ^,^tilesetIdx^:^0^},^0-7^:{^x^:0,^y^:7,^tileSymbol^:^Ý^,^tilesetIdx^:^0^},^0-8^:{^x^:0,^y^:8,^tileSymbol^:^å^,^tilesetIdx^:^0^},^0-9^:{^x^:0,^y^:9,^tileSymbol^:^í^,^tilesetIdx^:^0^},^1-0^:{^x^:1,^y^:0,^tileSymbol^:^¦^,^tilesetIdx^:^0^},^1-1^:{^x^:1,^y^:1,^tileSymbol^:^®^,^tilesetIdx^:^0^},^1-2^:{^x^:1,^y^:2,^tileSymbol^:^¶^,^tilesetIdx^:^0^},^1-3^:{^x^:1,^y^:3,^tileSymbol^:^¾^,^tilesetIdx^:^0^},^1-4^:{^x^:1,^y^:4,^tileSymbol^:^Æ^,^tilesetIdx^:^0^},^1-5^:{^x^:1,^y^:5,^tileSymbol^:^Î^,^tilesetIdx^:^0^},^1-6^:{^x^:1,^y^:6,^tileSymbol^:^Ö^,^tilesetIdx^:^0^},^1-7^:{^x^:1,^y^:7,^tileSymbol^:^Þ^,^tilesetIdx^:^0^},^1-8^:{^x^:1,^y^:8,^tileSymbol^:^æ^,^tilesetIdx^:^0^},^1-9^:{^x^:1,^y^:9,^tileSymbol^:^î^,^tilesetIdx^:^0^},^2-0^:{^x^:2,^y^:0,^tileSymbol^:^§^,^tilesetIdx^:^0^},^2-1^:{^x^:2,^y^:1,^tileSymbol^:^¯^,^tilesetIdx^:^0^},^2-2^:{^x^:2,^y^:2,^tileSymbol^:^·^,^tilesetIdx^:^0^},^2-3^:{^x^:2,^y^:3,^tileSymbol^:^¿^,^tilesetIdx^:^0^},^2-4^:{^x^:2,^y^:4,^tileSymbol^:^Ç^,^tilesetIdx^:^0^},^2-5^:{^x^:2,^y^:5,^tileSymbol^:^Ï^,^tilesetIdx^:^0^},^2-6^:{^x^:2,^y^:6,^tileSymbol^:^×^,^tilesetIdx^:^0^},^2-7^:{^x^:2,^y^:7,^tileSymbol^:^ß^,^tilesetIdx^:^0^},^2-8^:{^x^:2,^y^:8,^tileSymbol^:^ç^,^tilesetIdx^:^0^},^2-9^:{^x^:2,^y^:9,^tileSymbol^:^ï^,^tilesetIdx^:^0^},^3-0^:{^x^:3,^y^:0,^tileSymbol^:^¨^,^tilesetIdx^:^0^},^3-1^:{^x^:3,^y^:1,^tileSymbol^:^°^,^tilesetIdx^:^0^},^3-2^:{^x^:3,^y^:2,^tileSymbol^:^¸^,^tilesetIdx^:^0^},^3-3^:{^x^:3,^y^:3,^tileSymbol^:^À^,^tilesetIdx^:^0^},^3-4^:{^x^:3,^y^:4,^tileSymbol^:^È^,^tilesetIdx^:^0^},^3-5^:{^x^:3,^y^:5,^tileSymbol^:^Ð^,^tilesetIdx^:^0^},^3-6^:{^x^:3,^y^:6,^tileSymbol^:^Ø^,^tilesetIdx^:^0^},^3-7^:{^x^:3,^y^:7,^tileSymbol^:^à^,^tilesetIdx^:^0^},^3-8^:{^x^:3,^y^:8,^tileSymbol^:^è^,^tilesetIdx^:^0^},^3-9^:{^x^:3,^y^:9,^tileSymbol^:^ð^,^tilesetIdx^:^0^},^4-0^:{^x^:4,^y^:0,^tileSymbol^:^©^,^tilesetIdx^:^0^},^4-1^:{^x^:4,^y^:1,^tileSymbol^:^±^,^tilesetIdx^:^0^},^4-2^:{^x^:4,^y^:2,^tileSymbol^:^¹^,^tilesetIdx^:^0^},^4-3^:{^x^:4,^y^:3,^tileSymbol^:^Á^,^tilesetIdx^:^0^},^4-4^:{^x^:4,^y^:4,^tileSymbol^:^É^,^tilesetIdx^:^0^},^4-5^:{^x^:4,^y^:5,^tileSymbol^:^Ñ^,^tilesetIdx^:^0^},^4-6^:{^x^:4,^y^:6,^tileSymbol^:^Ù^,^tilesetIdx^:^0^},^4-7^:{^x^:4,^y^:7,^tileSymbol^:^á^,^tilesetIdx^:^0^},^4-8^:{^x^:4,^y^:8,^tileSymbol^:^é^,^tilesetIdx^:^0^},^4-9^:{^x^:4,^y^:9,^tileSymbol^:^ñ^,^tilesetIdx^:^0^},^5-0^:{^x^:5,^y^:0,^tileSymbol^:^ª^,^tilesetIdx^:^0^},^5-1^:{^x^:5,^y^:1,^tileSymbol^:^²^,^tilesetIdx^:^0^},^5-2^:{^x^:5,^y^:2,^tileSymbol^:^º^,^tilesetIdx^:^0^},^5-3^:{^x^:5,^y^:3,^tileSymbol^:^Â^,^tilesetIdx^:^0^},^5-4^:{^x^:5,^y^:4,^tileSymbol^:^Ê^,^tilesetIdx^:^0^},^5-5^:{^x^:5,^y^:5,^tileSymbol^:^Ò^,^tilesetIdx^:^0^},^5-6^:{^x^:5,^y^:6,^tileSymbol^:^Ú^,^tilesetIdx^:^0^},^5-7^:{^x^:5,^y^:7,^tileSymbol^:^â^,^tilesetIdx^:^0^},^5-8^:{^x^:5,^y^:8,^tileSymbol^:^ê^,^tilesetIdx^:^0^},^5-9^:{^x^:5,^y^:9,^tileSymbol^:^ò^,^tilesetIdx^:^0^},^6-0^:{^x^:6,^y^:0,^tileSymbol^:^«^,^tilesetIdx^:^0^},^6-1^:{^x^:6,^y^:1,^tileSymbol^:^³^,^tilesetIdx^:^0^},^6-2^:{^x^:6,^y^:2,^tileSymbol^:^»^,^tilesetIdx^:^0^},^6-3^:{^x^:6,^y^:3,^tileSymbol^:^Ã^,^tilesetIdx^:^0^},^6-4^:{^x^:6,^y^:4,^tileSymbol^:^Ë^,^tilesetIdx^:^0^},^6-5^:{^x^:6,^y^:5,^tileSymbol^:^Ó^,^tilesetIdx^:^0^},^6-6^:{^x^:6,^y^:6,^tileSymbol^:^Û^,^tilesetIdx^:^0^},^6-7^:{^x^:6,^y^:7,^tileSymbol^:^ã^,^tilesetIdx^:^0^},^6-8^:{^x^:6,^y^:8,^tileSymbol^:^ë^,^tilesetIdx^:^0^},^6-9^:{^x^:6,^y^:9,^tileSymbol^:^ó^,^tilesetIdx^:^0^},^7-0^:{^x^:7,^y^:0,^tileSymbol^:^¬^,^tilesetIdx^:^0^},^7-1^:{^x^:7,^y^:1,^tileSymbol^:^´^,^tilesetIdx^:^0^},^7-2^:{^x^:7,^y^:2,^tileSymbol^:^¼^,^tilesetIdx^:^0^},^7-3^:{^x^:7,^y^:3,^tileSymbol^:^Ä^,^tilesetIdx^:^0^},^7-4^:{^x^:7,^y^:4,^tileSymbol^:^Ì^,^tilesetIdx^:^0^},^7-5^:{^x^:7,^y^:5,^tileSymbol^:^Ô^,^tilesetIdx^:^0^},^7-6^:{^x^:7,^y^:6,^tileSymbol^:^Ü^,^tilesetIdx^:^0^},^7-7^:{^x^:7,^y^:7,^tileSymbol^:^ä^,^tilesetIdx^:^0^},^7-8^:{^x^:7,^y^:8,^tileSymbol^:^ì^,^tilesetIdx^:^0^},^7-9^:{^x^:7,^y^:9,^tileSymbol^:^ô^,^tilesetIdx^:^0^},^0-10^:{^x^:0,^y^:10,^tileSymbol^:^õ^,^tilesetIdx^:^0^},^0-11^:{^x^:0,^y^:11,^tileSymbol^:^ý^,^tilesetIdx^:^0^},^0-12^:{^x^:0,^y^:12,^tileSymbol^:^ą^,^tilesetIdx^:^0^},^0-13^:{^x^:0,^y^:13,^tileSymbol^:^č^,^tilesetIdx^:^0^},^0-14^:{^x^:0,^y^:14,^tileSymbol^:^ĕ^,^tilesetIdx^:^0^},^0-15^:{^x^:0,^y^:15,^tileSymbol^:^ĝ^,^tilesetIdx^:^0^},^0-16^:{^x^:0,^y^:16,^tileSymbol^:^ĥ^,^tilesetIdx^:^0^},^0-17^:{^x^:0,^y^:17,^tileSymbol^:^ĭ^,^tilesetIdx^:^0^},^0-18^:{^x^:0,^y^:18,^tileSymbol^:^ĵ^,^tilesetIdx^:^0^},^0-19^:{^x^:0,^y^:19,^tileSymbol^:^Ľ^,^tilesetIdx^:^0^},^0-20^:{^x^:0,^y^:20,^tileSymbol^:^Ņ^,^tilesetIdx^:^0^},^0-21^:{^x^:0,^y^:21,^tileSymbol^:^ō^,^tilesetIdx^:^0^},^0-22^:{^x^:0,^y^:22,^tileSymbol^:^ŕ^,^tilesetIdx^:^0^},^0-23^:{^x^:0,^y^:23,^tileSymbol^:^ŝ^,^tilesetIdx^:^0^},^0-24^:{^x^:0,^y^:24,^tileSymbol^:^ť^,^tilesetIdx^:^0^},^0-25^:{^x^:0,^y^:25,^tileSymbol^:^ŭ^,^tilesetIdx^:^0^},^0-26^:{^x^:0,^y^:26,^tileSymbol^:^ŵ^,^tilesetIdx^:^0^},^0-27^:{^x^:0,^y^:27,^tileSymbol^:^Ž^,^tilesetIdx^:^0^},^0-28^:{^x^:0,^y^:28,^tileSymbol^:^ƅ^,^tilesetIdx^:^0^},^0-29^:{^x^:0,^y^:29,^tileSymbol^:^ƍ^,^tilesetIdx^:^0^},^0-30^:{^x^:0,^y^:30,^tileSymbol^:^ƕ^,^tilesetIdx^:^0^},^0-31^:{^x^:0,^y^:31,^tileSymbol^:^Ɲ^,^tilesetIdx^:^0^},^0-32^:{^x^:0,^y^:32,^tileSymbol^:^ƥ^,^tilesetIdx^:^0^},^0-33^:{^x^:0,^y^:33,^tileSymbol^:^ƭ^,^tilesetIdx^:^0^},^0-34^:{^x^:0,^y^:34,^tileSymbol^:^Ƶ^,^tilesetIdx^:^0^},^0-35^:{^x^:0,^y^:35,^tileSymbol^:^ƽ^,^tilesetIdx^:^0^},^0-36^:{^x^:0,^y^:36,^tileSymbol^:^ǅ^,^tilesetIdx^:^0^},^0-37^:{^x^:0,^y^:37,^tileSymbol^:^Ǎ^,^tilesetIdx^:^0^},^0-38^:{^x^:0,^y^:38,^tileSymbol^:^Ǖ^,^tilesetIdx^:^0^},^0-39^:{^x^:0,^y^:39,^tileSymbol^:^ǝ^,^tilesetIdx^:^0^},^0-40^:{^x^:0,^y^:40,^tileSymbol^:^ǥ^,^tilesetIdx^:^0^},^0-41^:{^x^:0,^y^:41,^tileSymbol^:^ǭ^,^tilesetIdx^:^0^},^0-42^:{^x^:0,^y^:42,^tileSymbol^:^ǵ^,^tilesetIdx^:^0^},^0-43^:{^x^:0,^y^:43,^tileSymbol^:^ǽ^,^tilesetIdx^:^0^},^0-44^:{^x^:0,^y^:44,^tileSymbol^:^ȅ^,^tilesetIdx^:^0^},^0-45^:{^x^:0,^y^:45,^tileSymbol^:^ȍ^,^tilesetIdx^:^0^},^0-46^:{^x^:0,^y^:46,^tileSymbol^:^ȕ^,^tilesetIdx^:^0^},^0-47^:{^x^:0,^y^:47,^tileSymbol^:^ȝ^,^tilesetIdx^:^0^},^0-48^:{^x^:0,^y^:48,^tileSymbol^:^ȥ^,^tilesetIdx^:^0^},^0-49^:{^x^:0,^y^:49,^tileSymbol^:^ȭ^,^tilesetIdx^:^0^},^0-50^:{^x^:0,^y^:50,^tileSymbol^:^ȵ^,^tilesetIdx^:^0^},^0-51^:{^x^:0,^y^:51,^tileSymbol^:^Ƚ^,^tilesetIdx^:^0^},^0-52^:{^x^:0,^y^:52,^tileSymbol^:^Ʌ^,^tilesetIdx^:^0^},^0-53^:{^x^:0,^y^:53,^tileSymbol^:^ɍ^,^tilesetIdx^:^0^},^0-54^:{^x^:0,^y^:54,^tileSymbol^:^ɕ^,^tilesetIdx^:^0^},^0-55^:{^x^:0,^y^:55,^tileSymbol^:^ɝ^,^tilesetIdx^:^0^},^0-56^:{^x^:0,^y^:56,^tileSymbol^:^ɥ^,^tilesetIdx^:^0^},^0-57^:{^x^:0,^y^:57,^tileSymbol^:^ɭ^,^tilesetIdx^:^0^},^0-58^:{^x^:0,^y^:58,^tileSymbol^:^ɵ^,^tilesetIdx^:^0^},^0-59^:{^x^:0,^y^:59,^tileSymbol^:^ɽ^,^tilesetIdx^:^0^},^0-60^:{^x^:0,^y^:60,^tileSymbol^:^ʅ^,^tilesetIdx^:^0^},^0-61^:{^x^:0,^y^:61,^tileSymbol^:^ʍ^,^tilesetIdx^:^0^},^0-62^:{^x^:0,^y^:62,^tileSymbol^:^ʕ^,^tilesetIdx^:^0^},^0-63^:{^x^:0,^y^:63,^tileSymbol^:^ʝ^,^tilesetIdx^:^0^},^0-64^:{^x^:0,^y^:64,^tileSymbol^:^ʥ^,^tilesetIdx^:^0^},^0-65^:{^x^:0,^y^:65,^tileSymbol^:^ʭ^,^tilesetIdx^:^0^},^0-66^:{^x^:0,^y^:66,^tileSymbol^:^ʵ^,^tilesetIdx^:^0^},^0-67^:{^x^:0,^y^:67,^tileSymbol^:^ʽ^,^tilesetIdx^:^0^},^0-68^:{^x^:0,^y^:68,^tileSymbol^:^˅^,^tilesetIdx^:^0^},^0-69^:{^x^:0,^y^:69,^tileSymbol^:^ˍ^,^tilesetIdx^:^0^},^0-70^:{^x^:0,^y^:70,^tileSymbol^:^˕^,^tilesetIdx^:^0^},^0-71^:{^x^:0,^y^:71,^tileSymbol^:^˝^,^tilesetIdx^:^0^},^0-72^:{^x^:0,^y^:72,^tileSymbol^:^˥^,^tilesetIdx^:^0^},^0-73^:{^x^:0,^y^:73,^tileSymbol^:^˭^,^tilesetIdx^:^0^},^0-74^:{^x^:0,^y^:74,^tileSymbol^:^˵^,^tilesetIdx^:^0^},^0-75^:{^x^:0,^y^:75,^tileSymbol^:^˽^,^tilesetIdx^:^0^},^0-76^:{^x^:0,^y^:76,^tileSymbol^:^̅^,^tilesetIdx^:^0^},^0-77^:{^x^:0,^y^:77,^tileSymbol^:^̍^,^tilesetIdx^:^0^},^0-78^:{^x^:0,^y^:78,^tileSymbol^:^̕^,^tilesetIdx^:^0^},^0-79^:{^x^:0,^y^:79,^tileSymbol^:^̝^,^tilesetIdx^:^0^},^0-80^:{^x^:0,^y^:80,^tileSymbol^:^̥^,^tilesetIdx^:^0^},^0-81^:{^x^:0,^y^:81,^tileSymbol^:^̭^,^tilesetIdx^:^0^},^0-82^:{^x^:0,^y^:82,^tileSymbol^:^̵^,^tilesetIdx^:^0^},^0-83^:{^x^:0,^y^:83,^tileSymbol^:^̽^,^tilesetIdx^:^0^},^0-84^:{^x^:0,^y^:84,^tileSymbol^:^ͅ^,^tilesetIdx^:^0^},^0-85^:{^x^:0,^y^:85,^tileSymbol^:^͍^,^tilesetIdx^:^0^},^0-86^:{^x^:0,^y^:86,^tileSymbol^:^͕^,^tilesetIdx^:^0^},^0-87^:{^x^:0,^y^:87,^tileSymbol^:^͝^,^tilesetIdx^:^0^},^0-88^:{^x^:0,^y^:88,^tileSymbol^:^ͥ^,^tilesetIdx^:^0^},^0-89^:{^x^:0,^y^:89,^tileSymbol^:^ͭ^,^tilesetIdx^:^0^},^0-90^:{^x^:0,^y^:90,^tileSymbol^:^͵^,^tilesetIdx^:^0^},^0-91^:{^x^:0,^y^:91,^tileSymbol^:^ͽ^,^tilesetIdx^:^0^},^0-92^:{^x^:0,^y^:92,^tileSymbol^:^΅^,^tilesetIdx^:^0^},^0-93^:{^x^:0,^y^:93,^tileSymbol^:^΍^,^tilesetIdx^:^0^},^0-94^:{^x^:0,^y^:94,^tileSymbol^:^Ε^,^tilesetIdx^:^0^},^0-95^:{^x^:0,^y^:95,^tileSymbol^:^Ν^,^tilesetIdx^:^0^},^0-96^:{^x^:0,^y^:96,^tileSymbol^:^Υ^,^tilesetIdx^:^0^},^0-97^:{^x^:0,^y^:97,^tileSymbol^:^έ^,^tilesetIdx^:^0^},^0-98^:{^x^:0,^y^:98,^tileSymbol^:^ε^,^tilesetIdx^:^0^},^0-99^:{^x^:0,^y^:99,^tileSymbol^:^ν^,^tilesetIdx^:^0^},^1-10^:{^x^:1,^y^:10,^tileSymbol^:^ö^,^tilesetIdx^:^0^},^1-11^:{^x^:1,^y^:11,^tileSymbol^:^þ^,^tilesetIdx^:^0^},^1-12^:{^x^:1,^y^:12,^tileSymbol^:^Ć^,^tilesetIdx^:^0^},^1-13^:{^x^:1,^y^:13,^tileSymbol^:^Ď^,^tilesetIdx^:^0^},^1-14^:{^x^:1,^y^:14,^tileSymbol^:^Ė^,^tilesetIdx^:^0^},^1-15^:{^x^:1,^y^:15,^tileSymbol^:^Ğ^,^tilesetIdx^:^0^},^1-16^:{^x^:1,^y^:16,^tileSymbol^:^Ħ^,^tilesetIdx^:^0^},^1-17^:{^x^:1,^y^:17,^tileSymbol^:^Į^,^tilesetIdx^:^0^},^1-18^:{^x^:1,^y^:18,^tileSymbol^:^Ķ^,^tilesetIdx^:^0^},^1-19^:{^x^:1,^y^:19,^tileSymbol^:^ľ^,^tilesetIdx^:^0^},^1-20^:{^x^:1,^y^:20,^tileSymbol^:^ņ^,^tilesetIdx^:^0^},^1-21^:{^x^:1,^y^:21,^tileSymbol^:^Ŏ^,^tilesetIdx^:^0^},^1-22^:{^x^:1,^y^:22,^tileSymbol^:^Ŗ^,^tilesetIdx^:^0^},^1-23^:{^x^:1,^y^:23,^tileSymbol^:^Ş^,^tilesetIdx^:^0^},^1-24^:{^x^:1,^y^:24,^tileSymbol^:^Ŧ^,^tilesetIdx^:^0^},^1-25^:{^x^:1,^y^:25,^tileSymbol^:^Ů^,^tilesetIdx^:^0^},^1-26^:{^x^:1,^y^:26,^tileSymbol^:^Ŷ^,^tilesetIdx^:^0^},^1-27^:{^x^:1,^y^:27,^tileSymbol^:^ž^,^tilesetIdx^:^0^},^1-28^:{^x^:1,^y^:28,^tileSymbol^:^Ɔ^,^tilesetIdx^:^0^},^1-29^:{^x^:1,^y^:29,^tileSymbol^:^Ǝ^,^tilesetIdx^:^0^},^1-30^:{^x^:1,^y^:30,^tileSymbol^:^Ɩ^,^tilesetIdx^:^0^},^1-31^:{^x^:1,^y^:31,^tileSymbol^:^ƞ^,^tilesetIdx^:^0^},^1-32^:{^x^:1,^y^:32,^tileSymbol^:^Ʀ^,^tilesetIdx^:^0^},^1-33^:{^x^:1,^y^:33,^tileSymbol^:^Ʈ^,^tilesetIdx^:^0^},^1-34^:{^x^:1,^y^:34,^tileSymbol^:^ƶ^,^tilesetIdx^:^0^},^1-35^:{^x^:1,^y^:35,^tileSymbol^:^ƾ^,^tilesetIdx^:^0^},^1-36^:{^x^:1,^y^:36,^tileSymbol^:^ǆ^,^tilesetIdx^:^0^},^1-37^:{^x^:1,^y^:37,^tileSymbol^:^ǎ^,^tilesetIdx^:^0^},^1-38^:{^x^:1,^y^:38,^tileSymbol^:^ǖ^,^tilesetIdx^:^0^},^1-39^:{^x^:1,^y^:39,^tileSymbol^:^Ǟ^,^tilesetIdx^:^0^},^1-40^:{^x^:1,^y^:40,^tileSymbol^:^Ǧ^,^tilesetIdx^:^0^},^1-41^:{^x^:1,^y^:41,^tileSymbol^:^Ǯ^,^tilesetIdx^:^0^},^1-42^:{^x^:1,^y^:42,^tileSymbol^:^Ƕ^,^tilesetIdx^:^0^},^1-43^:{^x^:1,^y^:43,^tileSymbol^:^Ǿ^,^tilesetIdx^:^0^},^1-44^:{^x^:1,^y^:44,^tileSymbol^:^Ȇ^,^tilesetIdx^:^0^},^1-45^:{^x^:1,^y^:45,^tileSymbol^:^Ȏ^,^tilesetIdx^:^0^},^1-46^:{^x^:1,^y^:46,^tileSymbol^:^Ȗ^,^tilesetIdx^:^0^},^1-47^:{^x^:1,^y^:47,^tileSymbol^:^Ȟ^,^tilesetIdx^:^0^},^1-48^:{^x^:1,^y^:48,^tileSymbol^:^Ȧ^,^tilesetIdx^:^0^},^1-49^:{^x^:1,^y^:49,^tileSymbol^:^Ȯ^,^tilesetIdx^:^0^},^1-50^:{^x^:1,^y^:50,^tileSymbol^:^ȶ^,^tilesetIdx^:^0^},^1-51^:{^x^:1,^y^:51,^tileSymbol^:^Ⱦ^,^tilesetIdx^:^0^},^1-52^:{^x^:1,^y^:52,^tileSymbol^:^Ɇ^,^tilesetIdx^:^0^},^1-53^:{^x^:1,^y^:53,^tileSymbol^:^Ɏ^,^tilesetIdx^:^0^},^1-54^:{^x^:1,^y^:54,^tileSymbol^:^ɖ^,^tilesetIdx^:^0^},^1-55^:{^x^:1,^y^:55,^tileSymbol^:^ɞ^,^tilesetIdx^:^0^},^1-56^:{^x^:1,^y^:56,^tileSymbol^:^ɦ^,^tilesetIdx^:^0^},^1-57^:{^x^:1,^y^:57,^tileSymbol^:^ɮ^,^tilesetIdx^:^0^},^1-58^:{^x^:1,^y^:58,^tileSymbol^:^ɶ^,^tilesetIdx^:^0^},^1-59^:{^x^:1,^y^:59,^tileSymbol^:^ɾ^,^tilesetIdx^:^0^},^1-60^:{^x^:1,^y^:60,^tileSymbol^:^ʆ^,^tilesetIdx^:^0^},^1-61^:{^x^:1,^y^:61,^tileSymbol^:^ʎ^,^tilesetIdx^:^0^},^1-62^:{^x^:1,^y^:62,^tileSymbol^:^ʖ^,^tilesetIdx^:^0^},^1-63^:{^x^:1,^y^:63,^tileSymbol^:^ʞ^,^tilesetIdx^:^0^},^1-64^:{^x^:1,^y^:64,^tileSymbol^:^ʦ^,^tilesetIdx^:^0^},^1-65^:{^x^:1,^y^:65,^tileSymbol^:^ʮ^,^tilesetIdx^:^0^},^1-66^:{^x^:1,^y^:66,^tileSymbol^:^ʶ^,^tilesetIdx^:^0^},^1-67^:{^x^:1,^y^:67,^tileSymbol^:^ʾ^,^tilesetIdx^:^0^},^1-68^:{^x^:1,^y^:68,^tileSymbol^:^ˆ^,^tilesetIdx^:^0^},^1-69^:{^x^:1,^y^:69,^tileSymbol^:^ˎ^,^tilesetIdx^:^0^},^1-70^:{^x^:1,^y^:70,^tileSymbol^:^˖^,^tilesetIdx^:^0^},^1-71^:{^x^:1,^y^:71,^tileSymbol^:^˞^,^tilesetIdx^:^0^},^1-72^:{^x^:1,^y^:72,^tileSymbol^:^˦^,^tilesetIdx^:^0^},^1-73^:{^x^:1,^y^:73,^tileSymbol^:^ˮ^,^tilesetIdx^:^0^},^1-74^:{^x^:1,^y^:74,^tileSymbol^:^˶^,^tilesetIdx^:^0^},^1-75^:{^x^:1,^y^:75,^tileSymbol^:^˾^,^tilesetIdx^:^0^},^1-76^:{^x^:1,^y^:76,^tileSymbol^:^̆^,^tilesetIdx^:^0^},^1-77^:{^x^:1,^y^:77,^tileSymbol^:^̎^,^tilesetIdx^:^0^},^1-78^:{^x^:1,^y^:78,^tileSymbol^:^̖^,^tilesetIdx^:^0^},^1-79^:{^x^:1,^y^:79,^tileSymbol^:^̞^,^tilesetIdx^:^0^},^1-80^:{^x^:1,^y^:80,^tileSymbol^:^̦^,^tilesetIdx^:^0^},^1-81^:{^x^:1,^y^:81,^tileSymbol^:^̮^,^tilesetIdx^:^0^},^1-82^:{^x^:1,^y^:82,^tileSymbol^:^̶^,^tilesetIdx^:^0^},^1-83^:{^x^:1,^y^:83,^tileSymbol^:^̾^,^tilesetIdx^:^0^},^1-84^:{^x^:1,^y^:84,^tileSymbol^:^͆^,^tilesetIdx^:^0^},^1-85^:{^x^:1,^y^:85,^tileSymbol^:^͎^,^tilesetIdx^:^0^},^1-86^:{^x^:1,^y^:86,^tileSymbol^:^͖^,^tilesetIdx^:^0^},^1-87^:{^x^:1,^y^:87,^tileSymbol^:^͞^,^tilesetIdx^:^0^},^1-88^:{^x^:1,^y^:88,^tileSymbol^:^ͦ^,^tilesetIdx^:^0^},^1-89^:{^x^:1,^y^:89,^tileSymbol^:^ͮ^,^tilesetIdx^:^0^},^1-90^:{^x^:1,^y^:90,^tileSymbol^:^Ͷ^,^tilesetIdx^:^0^},^1-91^:{^x^:1,^y^:91,^tileSymbol^:^;^,^tilesetIdx^:^0^},^1-92^:{^x^:1,^y^:92,^tileSymbol^:^Ά^,^tilesetIdx^:^0^},^1-93^:{^x^:1,^y^:93,^tileSymbol^:^Ύ^,^tilesetIdx^:^0^},^1-94^:{^x^:1,^y^:94,^tileSymbol^:^Ζ^,^tilesetIdx^:^0^},^1-95^:{^x^:1,^y^:95,^tileSymbol^:^Ξ^,^tilesetIdx^:^0^},^1-96^:{^x^:1,^y^:96,^tileSymbol^:^Φ^,^tilesetIdx^:^0^},^1-97^:{^x^:1,^y^:97,^tileSymbol^:^ή^,^tilesetIdx^:^0^},^1-98^:{^x^:1,^y^:98,^tileSymbol^:^ζ^,^tilesetIdx^:^0^},^1-99^:{^x^:1,^y^:99,^tileSymbol^:^ξ^,^tilesetIdx^:^0^},^2-10^:{^x^:2,^y^:10,^tileSymbol^:^÷^,^tilesetIdx^:^0^},^2-11^:{^x^:2,^y^:11,^tileSymbol^:^ÿ^,^tilesetIdx^:^0^},^2-12^:{^x^:2,^y^:12,^tileSymbol^:^ć^,^tilesetIdx^:^0^},^2-13^:{^x^:2,^y^:13,^tileSymbol^:^ď^,^tilesetIdx^:^0^},^2-14^:{^x^:2,^y^:14,^tileSymbol^:^ė^,^tilesetIdx^:^0^},^2-15^:{^x^:2,^y^:15,^tileSymbol^:^ğ^,^tilesetIdx^:^0^},^2-16^:{^x^:2,^y^:16,^tileSymbol^:^ħ^,^tilesetIdx^:^0^},^2-17^:{^x^:2,^y^:17,^tileSymbol^:^į^,^tilesetIdx^:^0^},^2-18^:{^x^:2,^y^:18,^tileSymbol^:^ķ^,^tilesetIdx^:^0^},^2-19^:{^x^:2,^y^:19,^tileSymbol^:^Ŀ^,^tilesetIdx^:^0^},^2-20^:{^x^:2,^y^:20,^tileSymbol^:^Ň^,^tilesetIdx^:^0^},^2-21^:{^x^:2,^y^:21,^tileSymbol^:^ŏ^,^tilesetIdx^:^0^},^2-22^:{^x^:2,^y^:22,^tileSymbol^:^ŗ^,^tilesetIdx^:^0^},^2-23^:{^x^:2,^y^:23,^tileSymbol^:^ş^,^tilesetIdx^:^0^},^2-24^:{^x^:2,^y^:24,^tileSymbol^:^ŧ^,^tilesetIdx^:^0^},^2-25^:{^x^:2,^y^:25,^tileSymbol^:^ů^,^tilesetIdx^:^0^},^2-26^:{^x^:2,^y^:26,^tileSymbol^:^ŷ^,^tilesetIdx^:^0^},^2-27^:{^x^:2,^y^:27,^tileSymbol^:^ſ^,^tilesetIdx^:^0^},^2-28^:{^x^:2,^y^:28,^tileSymbol^:^Ƈ^,^tilesetIdx^:^0^},^2-29^:{^x^:2,^y^:29,^tileSymbol^:^Ə^,^tilesetIdx^:^0^},^2-30^:{^x^:2,^y^:30,^tileSymbol^:^Ɨ^,^tilesetIdx^:^0^},^2-31^:{^x^:2,^y^:31,^tileSymbol^:^Ɵ^,^tilesetIdx^:^0^},^2-32^:{^x^:2,^y^:32,^tileSymbol^:^Ƨ^,^tilesetIdx^:^0^},^2-33^:{^x^:2,^y^:33,^tileSymbol^:^Ư^,^tilesetIdx^:^0^},^2-34^:{^x^:2,^y^:34,^tileSymbol^:^Ʒ^,^tilesetIdx^:^0^},^2-35^:{^x^:2,^y^:35,^tileSymbol^:^ƿ^,^tilesetIdx^:^0^},^2-36^:{^x^:2,^y^:36,^tileSymbol^:^Ǉ^,^tilesetIdx^:^0^},^2-37^:{^x^:2,^y^:37,^tileSymbol^:^Ǐ^,^tilesetIdx^:^0^},^2-38^:{^x^:2,^y^:38,^tileSymbol^:^Ǘ^,^tilesetIdx^:^0^},^2-39^:{^x^:2,^y^:39,^tileSymbol^:^ǟ^,^tilesetIdx^:^0^},^2-40^:{^x^:2,^y^:40,^tileSymbol^:^ǧ^,^tilesetIdx^:^0^},^2-41^:{^x^:2,^y^:41,^tileSymbol^:^ǯ^,^tilesetIdx^:^0^},^2-42^:{^x^:2,^y^:42,^tileSymbol^:^Ƿ^,^tilesetIdx^:^0^},^2-43^:{^x^:2,^y^:43,^tileSymbol^:^ǿ^,^tilesetIdx^:^0^},^2-44^:{^x^:2,^y^:44,^tileSymbol^:^ȇ^,^tilesetIdx^:^0^},^2-45^:{^x^:2,^y^:45,^tileSymbol^:^ȏ^,^tilesetIdx^:^0^},^2-46^:{^x^:2,^y^:46,^tileSymbol^:^ȗ^,^tilesetIdx^:^0^},^2-47^:{^x^:2,^y^:47,^tileSymbol^:^ȟ^,^tilesetIdx^:^0^},^2-48^:{^x^:2,^y^:48,^tileSymbol^:^ȧ^,^tilesetIdx^:^0^},^2-49^:{^x^:2,^y^:49,^tileSymbol^:^ȯ^,^tilesetIdx^:^0^},^2-50^:{^x^:2,^y^:50,^tileSymbol^:^ȷ^,^tilesetIdx^:^0^},^2-51^:{^x^:2,^y^:51,^tileSymbol^:^ȿ^,^tilesetIdx^:^0^},^2-52^:{^x^:2,^y^:52,^tileSymbol^:^ɇ^,^tilesetIdx^:^0^},^2-53^:{^x^:2,^y^:53,^tileSymbol^:^ɏ^,^tilesetIdx^:^0^},^2-54^:{^x^:2,^y^:54,^tileSymbol^:^ɗ^,^tilesetIdx^:^0^},^2-55^:{^x^:2,^y^:55,^tileSymbol^:^ɟ^,^tilesetIdx^:^0^},^2-56^:{^x^:2,^y^:56,^tileSymbol^:^ɧ^,^tilesetIdx^:^0^},^2-57^:{^x^:2,^y^:57,^tileSymbol^:^ɯ^,^tilesetIdx^:^0^},^2-58^:{^x^:2,^y^:58,^tileSymbol^:^ɷ^,^tilesetIdx^:^0^},^2-59^:{^x^:2,^y^:59,^tileSymbol^:^ɿ^,^tilesetIdx^:^0^},^2-60^:{^x^:2,^y^:60,^tileSymbol^:^ʇ^,^tilesetIdx^:^0^},^2-61^:{^x^:2,^y^:61,^tileSymbol^:^ʏ^,^tilesetIdx^:^0^},^2-62^:{^x^:2,^y^:62,^tileSymbol^:^ʗ^,^tilesetIdx^:^0^},^2-63^:{^x^:2,^y^:63,^tileSymbol^:^ʟ^,^tilesetIdx^:^0^},^2-64^:{^x^:2,^y^:64,^tileSymbol^:^ʧ^,^tilesetIdx^:^0^},^2-65^:{^x^:2,^y^:65,^tileSymbol^:^ʯ^,^tilesetIdx^:^0^},^2-66^:{^x^:2,^y^:66,^tileSymbol^:^ʷ^,^tilesetIdx^:^0^},^2-67^:{^x^:2,^y^:67,^tileSymbol^:^ʿ^,^tilesetIdx^:^0^},^2-68^:{^x^:2,^y^:68,^tileSymbol^:^ˇ^,^tilesetIdx^:^0^},^2-69^:{^x^:2,^y^:69,^tileSymbol^:^ˏ^,^tilesetIdx^:^0^},^2-70^:{^x^:2,^y^:70,^tileSymbol^:^˗^,^tilesetIdx^:^0^},^2-71^:{^x^:2,^y^:71,^tileSymbol^:^˟^,^tilesetIdx^:^0^},^2-72^:{^x^:2,^y^:72,^tileSymbol^:^˧^,^tilesetIdx^:^0^},^2-73^:{^x^:2,^y^:73,^tileSymbol^:^˯^,^tilesetIdx^:^0^},^2-74^:{^x^:2,^y^:74,^tileSymbol^:^˷^,^tilesetIdx^:^0^},^2-75^:{^x^:2,^y^:75,^tileSymbol^:^˿^,^tilesetIdx^:^0^},^2-76^:{^x^:2,^y^:76,^tileSymbol^:^̇^,^tilesetIdx^:^0^},^2-77^:{^x^:2,^y^:77,^tileSymbol^:^̏^,^tilesetIdx^:^0^},^2-78^:{^x^:2,^y^:78,^tileSymbol^:^̗^,^tilesetIdx^:^0^},^2-79^:{^x^:2,^y^:79,^tileSymbol^:^̟^,^tilesetIdx^:^0^},^2-80^:{^x^:2,^y^:80,^tileSymbol^:^̧^,^tilesetIdx^:^0^},^2-81^:{^x^:2,^y^:81,^tileSymbol^:^̯^,^tilesetIdx^:^0^},^2-82^:{^x^:2,^y^:82,^tileSymbol^:^̷^,^tilesetIdx^:^0^},^2-83^:{^x^:2,^y^:83,^tileSymbol^:^̿^,^tilesetIdx^:^0^},^2-84^:{^x^:2,^y^:84,^tileSymbol^:^͇^,^tilesetIdx^:^0^},^2-85^:{^x^:2,^y^:85,^tileSymbol^:^͏^,^tilesetIdx^:^0^},^2-86^:{^x^:2,^y^:86,^tileSymbol^:^͗^,^tilesetIdx^:^0^},^2-87^:{^x^:2,^y^:87,^tileSymbol^:^͟^,^tilesetIdx^:^0^},^2-88^:{^x^:2,^y^:88,^tileSymbol^:^ͧ^,^tilesetIdx^:^0^},^2-89^:{^x^:2,^y^:89,^tileSymbol^:^ͯ^,^tilesetIdx^:^0^},^2-90^:{^x^:2,^y^:90,^tileSymbol^:^ͷ^,^tilesetIdx^:^0^},^2-91^:{^x^:2,^y^:91,^tileSymbol^:^Ϳ^,^tilesetIdx^:^0^},^2-92^:{^x^:2,^y^:92,^tileSymbol^:^·^,^tilesetIdx^:^0^},^2-93^:{^x^:2,^y^:93,^tileSymbol^:^Ώ^,^tilesetIdx^:^0^},^2-94^:{^x^:2,^y^:94,^tileSymbol^:^Η^,^tilesetIdx^:^0^},^2-95^:{^x^:2,^y^:95,^tileSymbol^:^Ο^,^tilesetIdx^:^0^},^2-96^:{^x^:2,^y^:96,^tileSymbol^:^Χ^,^tilesetIdx^:^0^},^2-97^:{^x^:2,^y^:97,^tileSymbol^:^ί^,^tilesetIdx^:^0^},^2-98^:{^x^:2,^y^:98,^tileSymbol^:^η^,^tilesetIdx^:^0^},^2-99^:{^x^:2,^y^:99,^tileSymbol^:^ο^,^tilesetIdx^:^0^},^3-10^:{^x^:3,^y^:10,^tileSymbol^:^ø^,^tilesetIdx^:^0^},^3-11^:{^x^:3,^y^:11,^tileSymbol^:^Ā^,^tilesetIdx^:^0^},^3-12^:{^x^:3,^y^:12,^tileSymbol^:^Ĉ^,^tilesetIdx^:^0^},^3-13^:{^x^:3,^y^:13,^tileSymbol^:^Đ^,^tilesetIdx^:^0^},^3-14^:{^x^:3,^y^:14,^tileSymbol^:^Ę^,^tilesetIdx^:^0^},^3-15^:{^x^:3,^y^:15,^tileSymbol^:^Ġ^,^tilesetIdx^:^0^},^3-16^:{^x^:3,^y^:16,^tileSymbol^:^Ĩ^,^tilesetIdx^:^0^},^3-17^:{^x^:3,^y^:17,^tileSymbol^:^İ^,^tilesetIdx^:^0^},^3-18^:{^x^:3,^y^:18,^tileSymbol^:^ĸ^,^tilesetIdx^:^0^},^3-19^:{^x^:3,^y^:19,^tileSymbol^:^ŀ^,^tilesetIdx^:^0^},^3-20^:{^x^:3,^y^:20,^tileSymbol^:^ň^,^tilesetIdx^:^0^},^3-21^:{^x^:3,^y^:21,^tileSymbol^:^Ő^,^tilesetIdx^:^0^},^3-22^:{^x^:3,^y^:22,^tileSymbol^:^Ř^,^tilesetIdx^:^0^},^3-23^:{^x^:3,^y^:23,^tileSymbol^:^Š^,^tilesetIdx^:^0^},^3-24^:{^x^:3,^y^:24,^tileSymbol^:^Ũ^,^tilesetIdx^:^0^},^3-25^:{^x^:3,^y^:25,^tileSymbol^:^Ű^,^tilesetIdx^:^0^},^3-26^:{^x^:3,^y^:26,^tileSymbol^:^Ÿ^,^tilesetIdx^:^0^},^3-27^:{^x^:3,^y^:27,^tileSymbol^:^ƀ^,^tilesetIdx^:^0^},^3-28^:{^x^:3,^y^:28,^tileSymbol^:^ƈ^,^tilesetIdx^:^0^},^3-29^:{^x^:3,^y^:29,^tileSymbol^:^Ɛ^,^tilesetIdx^:^0^},^3-30^:{^x^:3,^y^:30,^tileSymbol^:^Ƙ^,^tilesetIdx^:^0^},^3-31^:{^x^:3,^y^:31,^tileSymbol^:^Ơ^,^tilesetIdx^:^0^},^3-32^:{^x^:3,^y^:32,^tileSymbol^:^ƨ^,^tilesetIdx^:^0^},^3-33^:{^x^:3,^y^:33,^tileSymbol^:^ư^,^tilesetIdx^:^0^},^3-34^:{^x^:3,^y^:34,^tileSymbol^:^Ƹ^,^tilesetIdx^:^0^},^3-35^:{^x^:3,^y^:35,^tileSymbol^:^ǀ^,^tilesetIdx^:^0^},^3-36^:{^x^:3,^y^:36,^tileSymbol^:^ǈ^,^tilesetIdx^:^0^},^3-37^:{^x^:3,^y^:37,^tileSymbol^:^ǐ^,^tilesetIdx^:^0^},^3-38^:{^x^:3,^y^:38,^tileSymbol^:^ǘ^,^tilesetIdx^:^0^},^3-39^:{^x^:3,^y^:39,^tileSymbol^:^Ǡ^,^tilesetIdx^:^0^},^3-40^:{^x^:3,^y^:40,^tileSymbol^:^Ǩ^,^tilesetIdx^:^0^},^3-41^:{^x^:3,^y^:41,^tileSymbol^:^ǰ^,^tilesetIdx^:^0^},^3-42^:{^x^:3,^y^:42,^tileSymbol^:^Ǹ^,^tilesetIdx^:^0^},^3-43^:{^x^:3,^y^:43,^tileSymbol^:^Ȁ^,^tilesetIdx^:^0^},^3-44^:{^x^:3,^y^:44,^tileSymbol^:^Ȉ^,^tilesetIdx^:^0^},^3-45^:{^x^:3,^y^:45,^tileSymbol^:^Ȑ^,^tilesetIdx^:^0^},^3-46^:{^x^:3,^y^:46,^tileSymbol^:^Ș^,^tilesetIdx^:^0^},^3-47^:{^x^:3,^y^:47,^tileSymbol^:^Ƞ^,^tilesetIdx^:^0^},^3-48^:{^x^:3,^y^:48,^tileSymbol^:^Ȩ^,^tilesetIdx^:^0^},^3-49^:{^x^:3,^y^:49,^tileSymbol^:^Ȱ^,^tilesetIdx^:^0^},^3-50^:{^x^:3,^y^:50,^tileSymbol^:^ȸ^,^tilesetIdx^:^0^},^3-51^:{^x^:3,^y^:51,^tileSymbol^:^ɀ^,^tilesetIdx^:^0^},^3-52^:{^x^:3,^y^:52,^tileSymbol^:^Ɉ^,^tilesetIdx^:^0^},^3-53^:{^x^:3,^y^:53,^tileSymbol^:^ɐ^,^tilesetIdx^:^0^},^3-54^:{^x^:3,^y^:54,^tileSymbol^:^ɘ^,^tilesetIdx^:^0^},^3-55^:{^x^:3,^y^:55,^tileSymbol^:^ɠ^,^tilesetIdx^:^0^},^3-56^:{^x^:3,^y^:56,^tileSymbol^:^ɨ^,^tilesetIdx^:^0^},^3-57^:{^x^:3,^y^:57,^tileSymbol^:^ɰ^,^tilesetIdx^:^0^},^3-58^:{^x^:3,^y^:58,^tileSymbol^:^ɸ^,^tilesetIdx^:^0^},^3-59^:{^x^:3,^y^:59,^tileSymbol^:^ʀ^,^tilesetIdx^:^0^},^3-60^:{^x^:3,^y^:60,^tileSymbol^:^ʈ^,^tilesetIdx^:^0^},^3-61^:{^x^:3,^y^:61,^tileSymbol^:^ʐ^,^tilesetIdx^:^0^},^3-62^:{^x^:3,^y^:62,^tileSymbol^:^ʘ^,^tilesetIdx^:^0^},^3-63^:{^x^:3,^y^:63,^tileSymbol^:^ʠ^,^tilesetIdx^:^0^},^3-64^:{^x^:3,^y^:64,^tileSymbol^:^ʨ^,^tilesetIdx^:^0^},^3-65^:{^x^:3,^y^:65,^tileSymbol^:^ʰ^,^tilesetIdx^:^0^},^3-66^:{^x^:3,^y^:66,^tileSymbol^:^ʸ^,^tilesetIdx^:^0^},^3-67^:{^x^:3,^y^:67,^tileSymbol^:^ˀ^,^tilesetIdx^:^0^},^3-68^:{^x^:3,^y^:68,^tileSymbol^:^ˈ^,^tilesetIdx^:^0^},^3-69^:{^x^:3,^y^:69,^tileSymbol^:^ː^,^tilesetIdx^:^0^},^3-70^:{^x^:3,^y^:70,^tileSymbol^:^˘^,^tilesetIdx^:^0^},^3-71^:{^x^:3,^y^:71,^tileSymbol^:^ˠ^,^tilesetIdx^:^0^},^3-72^:{^x^:3,^y^:72,^tileSymbol^:^˨^,^tilesetIdx^:^0^},^3-73^:{^x^:3,^y^:73,^tileSymbol^:^˰^,^tilesetIdx^:^0^},^3-74^:{^x^:3,^y^:74,^tileSymbol^:^˸^,^tilesetIdx^:^0^},^3-75^:{^x^:3,^y^:75,^tileSymbol^:^̀^,^tilesetIdx^:^0^},^3-76^:{^x^:3,^y^:76,^tileSymbol^:^̈^,^tilesetIdx^:^0^},^3-77^:{^x^:3,^y^:77,^tileSymbol^:^̐^,^tilesetIdx^:^0^},^3-78^:{^x^:3,^y^:78,^tileSymbol^:^̘^,^tilesetIdx^:^0^},^3-79^:{^x^:3,^y^:79,^tileSymbol^:^̠^,^tilesetIdx^:^0^},^3-80^:{^x^:3,^y^:80,^tileSymbol^:^̨^,^tilesetIdx^:^0^},^3-81^:{^x^:3,^y^:81,^tileSymbol^:^̰^,^tilesetIdx^:^0^},^3-82^:{^x^:3,^y^:82,^tileSymbol^:^̸^,^tilesetIdx^:^0^},^3-83^:{^x^:3,^y^:83,^tileSymbol^:^̀^,^tilesetIdx^:^0^},^3-84^:{^x^:3,^y^:84,^tileSymbol^:^͈^,^tilesetIdx^:^0^},^3-85^:{^x^:3,^y^:85,^tileSymbol^:^͐^,^tilesetIdx^:^0^},^3-86^:{^x^:3,^y^:86,^tileSymbol^:^͘^,^tilesetIdx^:^0^},^3-87^:{^x^:3,^y^:87,^tileSymbol^:^͠^,^tilesetIdx^:^0^},^3-88^:{^x^:3,^y^:88,^tileSymbol^:^ͨ^,^tilesetIdx^:^0^},^3-89^:{^x^:3,^y^:89,^tileSymbol^:^Ͱ^,^tilesetIdx^:^0^},^3-90^:{^x^:3,^y^:90,^tileSymbol^:^͸^,^tilesetIdx^:^0^},^3-91^:{^x^:3,^y^:91,^tileSymbol^:^΀^,^tilesetIdx^:^0^},^3-92^:{^x^:3,^y^:92,^tileSymbol^:^Έ^,^tilesetIdx^:^0^},^3-93^:{^x^:3,^y^:93,^tileSymbol^:^ΐ^,^tilesetIdx^:^0^},^3-94^:{^x^:3,^y^:94,^tileSymbol^:^Θ^,^tilesetIdx^:^0^},^3-95^:{^x^:3,^y^:95,^tileSymbol^:^Π^,^tilesetIdx^:^0^},^3-96^:{^x^:3,^y^:96,^tileSymbol^:^Ψ^,^tilesetIdx^:^0^},^3-97^:{^x^:3,^y^:97,^tileSymbol^:^ΰ^,^tilesetIdx^:^0^},^3-98^:{^x^:3,^y^:98,^tileSymbol^:^θ^,^tilesetIdx^:^0^},^3-99^:{^x^:3,^y^:99,^tileSymbol^:^π^,^tilesetIdx^:^0^},^4-10^:{^x^:4,^y^:10,^tileSymbol^:^ù^,^tilesetIdx^:^0^},^4-11^:{^x^:4,^y^:11,^tileSymbol^:^ā^,^tilesetIdx^:^0^},^4-12^:{^x^:4,^y^:12,^tileSymbol^:^ĉ^,^tilesetIdx^:^0^},^4-13^:{^x^:4,^y^:13,^tileSymbol^:^đ^,^tilesetIdx^:^0^},^4-14^:{^x^:4,^y^:14,^tileSymbol^:^ę^,^tilesetIdx^:^0^},^4-15^:{^x^:4,^y^:15,^tileSymbol^:^ġ^,^tilesetIdx^:^0^},^4-16^:{^x^:4,^y^:16,^tileSymbol^:^ĩ^,^tilesetIdx^:^0^},^4-17^:{^x^:4,^y^:17,^tileSymbol^:^ı^,^tilesetIdx^:^0^},^4-18^:{^x^:4,^y^:18,^tileSymbol^:^Ĺ^,^tilesetIdx^:^0^},^4-19^:{^x^:4,^y^:19,^tileSymbol^:^Ł^,^tilesetIdx^:^0^},^4-20^:{^x^:4,^y^:20,^tileSymbol^:^ŉ^,^tilesetIdx^:^0^},^4-21^:{^x^:4,^y^:21,^tileSymbol^:^ő^,^tilesetIdx^:^0^},^4-22^:{^x^:4,^y^:22,^tileSymbol^:^ř^,^tilesetIdx^:^0^},^4-23^:{^x^:4,^y^:23,^tileSymbol^:^š^,^tilesetIdx^:^0^},^4-24^:{^x^:4,^y^:24,^tileSymbol^:^ũ^,^tilesetIdx^:^0^},^4-25^:{^x^:4,^y^:25,^tileSymbol^:^ű^,^tilesetIdx^:^0^},^4-26^:{^x^:4,^y^:26,^tileSymbol^:^Ź^,^tilesetIdx^:^0^},^4-27^:{^x^:4,^y^:27,^tileSymbol^:^Ɓ^,^tilesetIdx^:^0^},^4-28^:{^x^:4,^y^:28,^tileSymbol^:^Ɖ^,^tilesetIdx^:^0^},^4-29^:{^x^:4,^y^:29,^tileSymbol^:^Ƒ^,^tilesetIdx^:^0^},^4-30^:{^x^:4,^y^:30,^tileSymbol^:^ƙ^,^tilesetIdx^:^0^},^4-31^:{^x^:4,^y^:31,^tileSymbol^:^ơ^,^tilesetIdx^:^0^},^4-32^:{^x^:4,^y^:32,^tileSymbol^:^Ʃ^,^tilesetIdx^:^0^},^4-33^:{^x^:4,^y^:33,^tileSymbol^:^Ʊ^,^tilesetIdx^:^0^},^4-34^:{^x^:4,^y^:34,^tileSymbol^:^ƹ^,^tilesetIdx^:^0^},^4-35^:{^x^:4,^y^:35,^tileSymbol^:^ǁ^,^tilesetIdx^:^0^},^4-36^:{^x^:4,^y^:36,^tileSymbol^:^ǉ^,^tilesetIdx^:^0^},^4-37^:{^x^:4,^y^:37,^tileSymbol^:^Ǒ^,^tilesetIdx^:^0^},^4-38^:{^x^:4,^y^:38,^tileSymbol^:^Ǚ^,^tilesetIdx^:^0^},^4-39^:{^x^:4,^y^:39,^tileSymbol^:^ǡ^,^tilesetIdx^:^0^},^4-40^:{^x^:4,^y^:40,^tileSymbol^:^ǩ^,^tilesetIdx^:^0^},^4-41^:{^x^:4,^y^:41,^tileSymbol^:^Ǳ^,^tilesetIdx^:^0^},^4-42^:{^x^:4,^y^:42,^tileSymbol^:^ǹ^,^tilesetIdx^:^0^},^4-43^:{^x^:4,^y^:43,^tileSymbol^:^ȁ^,^tilesetIdx^:^0^},^4-44^:{^x^:4,^y^:44,^tileSymbol^:^ȉ^,^tilesetIdx^:^0^},^4-45^:{^x^:4,^y^:45,^tileSymbol^:^ȑ^,^tilesetIdx^:^0^},^4-46^:{^x^:4,^y^:46,^tileSymbol^:^ș^,^tilesetIdx^:^0^},^4-47^:{^x^:4,^y^:47,^tileSymbol^:^ȡ^,^tilesetIdx^:^0^},^4-48^:{^x^:4,^y^:48,^tileSymbol^:^ȩ^,^tilesetIdx^:^0^},^4-49^:{^x^:4,^y^:49,^tileSymbol^:^ȱ^,^tilesetIdx^:^0^},^4-50^:{^x^:4,^y^:50,^tileSymbol^:^ȹ^,^tilesetIdx^:^0^},^4-51^:{^x^:4,^y^:51,^tileSymbol^:^Ɂ^,^tilesetIdx^:^0^},^4-52^:{^x^:4,^y^:52,^tileSymbol^:^ɉ^,^tilesetIdx^:^0^},^4-53^:{^x^:4,^y^:53,^tileSymbol^:^ɑ^,^tilesetIdx^:^0^},^4-54^:{^x^:4,^y^:54,^tileSymbol^:^ə^,^tilesetIdx^:^0^},^4-55^:{^x^:4,^y^:55,^tileSymbol^:^ɡ^,^tilesetIdx^:^0^},^4-56^:{^x^:4,^y^:56,^tileSymbol^:^ɩ^,^tilesetIdx^:^0^},^4-57^:{^x^:4,^y^:57,^tileSymbol^:^ɱ^,^tilesetIdx^:^0^},^4-58^:{^x^:4,^y^:58,^tileSymbol^:^ɹ^,^tilesetIdx^:^0^},^4-59^:{^x^:4,^y^:59,^tileSymbol^:^ʁ^,^tilesetIdx^:^0^},^4-60^:{^x^:4,^y^:60,^tileSymbol^:^ʉ^,^tilesetIdx^:^0^},^4-61^:{^x^:4,^y^:61,^tileSymbol^:^ʑ^,^tilesetIdx^:^0^},^4-62^:{^x^:4,^y^:62,^tileSymbol^:^ʙ^,^tilesetIdx^:^0^},^4-63^:{^x^:4,^y^:63,^tileSymbol^:^ʡ^,^tilesetIdx^:^0^},^4-64^:{^x^:4,^y^:64,^tileSymbol^:^ʩ^,^tilesetIdx^:^0^},^4-65^:{^x^:4,^y^:65,^tileSymbol^:^ʱ^,^tilesetIdx^:^0^},^4-66^:{^x^:4,^y^:66,^tileSymbol^:^ʹ^,^tilesetIdx^:^0^},^4-67^:{^x^:4,^y^:67,^tileSymbol^:^ˁ^,^tilesetIdx^:^0^},^4-68^:{^x^:4,^y^:68,^tileSymbol^:^ˉ^,^tilesetIdx^:^0^},^4-69^:{^x^:4,^y^:69,^tileSymbol^:^ˑ^,^tilesetIdx^:^0^},^4-70^:{^x^:4,^y^:70,^tileSymbol^:^˙^,^tilesetIdx^:^0^},^4-71^:{^x^:4,^y^:71,^tileSymbol^:^ˡ^,^tilesetIdx^:^0^},^4-72^:{^x^:4,^y^:72,^tileSymbol^:^˩^,^tilesetIdx^:^0^},^4-73^:{^x^:4,^y^:73,^tileSymbol^:^˱^,^tilesetIdx^:^0^},^4-74^:{^x^:4,^y^:74,^tileSymbol^:^˹^,^tilesetIdx^:^0^},^4-75^:{^x^:4,^y^:75,^tileSymbol^:^́^,^tilesetIdx^:^0^},^4-76^:{^x^:4,^y^:76,^tileSymbol^:^̉^,^tilesetIdx^:^0^},^4-77^:{^x^:4,^y^:77,^tileSymbol^:^̑^,^tilesetIdx^:^0^},^4-78^:{^x^:4,^y^:78,^tileSymbol^:^̙^,^tilesetIdx^:^0^},^4-79^:{^x^:4,^y^:79,^tileSymbol^:^̡^,^tilesetIdx^:^0^},^4-80^:{^x^:4,^y^:80,^tileSymbol^:^̩^,^tilesetIdx^:^0^},^4-81^:{^x^:4,^y^:81,^tileSymbol^:^̱^,^tilesetIdx^:^0^},^4-82^:{^x^:4,^y^:82,^tileSymbol^:^̹^,^tilesetIdx^:^0^},^4-83^:{^x^:4,^y^:83,^tileSymbol^:^́^,^tilesetIdx^:^0^},^4-84^:{^x^:4,^y^:84,^tileSymbol^:^͉^,^tilesetIdx^:^0^},^4-85^:{^x^:4,^y^:85,^tileSymbol^:^͑^,^tilesetIdx^:^0^},^4-86^:{^x^:4,^y^:86,^tileSymbol^:^͙^,^tilesetIdx^:^0^},^4-87^:{^x^:4,^y^:87,^tileSymbol^:^͡^,^tilesetIdx^:^0^},^4-88^:{^x^:4,^y^:88,^tileSymbol^:^ͩ^,^tilesetIdx^:^0^},^4-89^:{^x^:4,^y^:89,^tileSymbol^:^ͱ^,^tilesetIdx^:^0^},^4-90^:{^x^:4,^y^:90,^tileSymbol^:^͹^,^tilesetIdx^:^0^},^4-91^:{^x^:4,^y^:91,^tileSymbol^:^΁^,^tilesetIdx^:^0^},^4-92^:{^x^:4,^y^:92,^tileSymbol^:^Ή^,^tilesetIdx^:^0^},^4-93^:{^x^:4,^y^:93,^tileSymbol^:^Α^,^tilesetIdx^:^0^},^4-94^:{^x^:4,^y^:94,^tileSymbol^:^Ι^,^tilesetIdx^:^0^},^4-95^:{^x^:4,^y^:95,^tileSymbol^:^Ρ^,^tilesetIdx^:^0^},^4-96^:{^x^:4,^y^:96,^tileSymbol^:^Ω^,^tilesetIdx^:^0^},^4-97^:{^x^:4,^y^:97,^tileSymbol^:^α^,^tilesetIdx^:^0^},^4-98^:{^x^:4,^y^:98,^tileSymbol^:^ι^,^tilesetIdx^:^0^},^4-99^:{^x^:4,^y^:99,^tileSymbol^:^ρ^,^tilesetIdx^:^0^},^5-10^:{^x^:5,^y^:10,^tileSymbol^:^ú^,^tilesetIdx^:^0^},^5-11^:{^x^:5,^y^:11,^tileSymbol^:^Ă^,^tilesetIdx^:^0^},^5-12^:{^x^:5,^y^:12,^tileSymbol^:^Ċ^,^tilesetIdx^:^0^},^5-13^:{^x^:5,^y^:13,^tileSymbol^:^Ē^,^tilesetIdx^:^0^},^5-14^:{^x^:5,^y^:14,^tileSymbol^:^Ě^,^tilesetIdx^:^0^},^5-15^:{^x^:5,^y^:15,^tileSymbol^:^Ģ^,^tilesetIdx^:^0^},^5-16^:{^x^:5,^y^:16,^tileSymbol^:^Ī^,^tilesetIdx^:^0^},^5-17^:{^x^:5,^y^:17,^tileSymbol^:^Ĳ^,^tilesetIdx^:^0^},^5-18^:{^x^:5,^y^:18,^tileSymbol^:^ĺ^,^tilesetIdx^:^0^},^5-19^:{^x^:5,^y^:19,^tileSymbol^:^ł^,^tilesetIdx^:^0^},^5-20^:{^x^:5,^y^:20,^tileSymbol^:^Ŋ^,^tilesetIdx^:^0^},^5-21^:{^x^:5,^y^:21,^tileSymbol^:^Œ^,^tilesetIdx^:^0^},^5-22^:{^x^:5,^y^:22,^tileSymbol^:^Ś^,^tilesetIdx^:^0^},^5-23^:{^x^:5,^y^:23,^tileSymbol^:^Ţ^,^tilesetIdx^:^0^},^5-24^:{^x^:5,^y^:24,^tileSymbol^:^Ū^,^tilesetIdx^:^0^},^5-25^:{^x^:5,^y^:25,^tileSymbol^:^Ų^,^tilesetIdx^:^0^},^5-26^:{^x^:5,^y^:26,^tileSymbol^:^ź^,^tilesetIdx^:^0^},^5-27^:{^x^:5,^y^:27,^tileSymbol^:^Ƃ^,^tilesetIdx^:^0^},^5-28^:{^x^:5,^y^:28,^tileSymbol^:^Ɗ^,^tilesetIdx^:^0^},^5-29^:{^x^:5,^y^:29,^tileSymbol^:^ƒ^,^tilesetIdx^:^0^},^5-30^:{^x^:5,^y^:30,^tileSymbol^:^ƚ^,^tilesetIdx^:^0^},^5-31^:{^x^:5,^y^:31,^tileSymbol^:^Ƣ^,^tilesetIdx^:^0^},^5-32^:{^x^:5,^y^:32,^tileSymbol^:^ƪ^,^tilesetIdx^:^0^},^5-33^:{^x^:5,^y^:33,^tileSymbol^:^Ʋ^,^tilesetIdx^:^0^},^5-34^:{^x^:5,^y^:34,^tileSymbol^:^ƺ^,^tilesetIdx^:^0^},^5-35^:{^x^:5,^y^:35,^tileSymbol^:^ǂ^,^tilesetIdx^:^0^},^5-36^:{^x^:5,^y^:36,^tileSymbol^:^Ǌ^,^tilesetIdx^:^0^},^5-37^:{^x^:5,^y^:37,^tileSymbol^:^ǒ^,^tilesetIdx^:^0^},^5-38^:{^x^:5,^y^:38,^tileSymbol^:^ǚ^,^tilesetIdx^:^0^},^5-39^:{^x^:5,^y^:39,^tileSymbol^:^Ǣ^,^tilesetIdx^:^0^},^5-40^:{^x^:5,^y^:40,^tileSymbol^:^Ǫ^,^tilesetIdx^:^0^},^5-41^:{^x^:5,^y^:41,^tileSymbol^:^ǲ^,^tilesetIdx^:^0^},^5-42^:{^x^:5,^y^:42,^tileSymbol^:^Ǻ^,^tilesetIdx^:^0^},^5-43^:{^x^:5,^y^:43,^tileSymbol^:^Ȃ^,^tilesetIdx^:^0^},^5-44^:{^x^:5,^y^:44,^tileSymbol^:^Ȋ^,^tilesetIdx^:^0^},^5-45^:{^x^:5,^y^:45,^tileSymbol^:^Ȓ^,^tilesetIdx^:^0^},^5-46^:{^x^:5,^y^:46,^tileSymbol^:^Ț^,^tilesetIdx^:^0^},^5-47^:{^x^:5,^y^:47,^tileSymbol^:^Ȣ^,^tilesetIdx^:^0^},^5-48^:{^x^:5,^y^:48,^tileSymbol^:^Ȫ^,^tilesetIdx^:^0^},^5-49^:{^x^:5,^y^:49,^tileSymbol^:^Ȳ^,^tilesetIdx^:^0^},^5-50^:{^x^:5,^y^:50,^tileSymbol^:^Ⱥ^,^tilesetIdx^:^0^},^5-51^:{^x^:5,^y^:51,^tileSymbol^:^ɂ^,^tilesetIdx^:^0^},^5-52^:{^x^:5,^y^:52,^tileSymbol^:^Ɋ^,^tilesetIdx^:^0^},^5-53^:{^x^:5,^y^:53,^tileSymbol^:^ɒ^,^tilesetIdx^:^0^},^5-54^:{^x^:5,^y^:54,^tileSymbol^:^ɚ^,^tilesetIdx^:^0^},^5-55^:{^x^:5,^y^:55,^tileSymbol^:^ɢ^,^tilesetIdx^:^0^},^5-56^:{^x^:5,^y^:56,^tileSymbol^:^ɪ^,^tilesetIdx^:^0^},^5-57^:{^x^:5,^y^:57,^tileSymbol^:^ɲ^,^tilesetIdx^:^0^},^5-58^:{^x^:5,^y^:58,^tileSymbol^:^ɺ^,^tilesetIdx^:^0^},^5-59^:{^x^:5,^y^:59,^tileSymbol^:^ʂ^,^tilesetIdx^:^0^},^5-60^:{^x^:5,^y^:60,^tileSymbol^:^ʊ^,^tilesetIdx^:^0^},^5-61^:{^x^:5,^y^:61,^tileSymbol^:^ʒ^,^tilesetIdx^:^0^},^5-62^:{^x^:5,^y^:62,^tileSymbol^:^ʚ^,^tilesetIdx^:^0^},^5-63^:{^x^:5,^y^:63,^tileSymbol^:^ʢ^,^tilesetIdx^:^0^},^5-64^:{^x^:5,^y^:64,^tileSymbol^:^ʪ^,^tilesetIdx^:^0^},^5-65^:{^x^:5,^y^:65,^tileSymbol^:^ʲ^,^tilesetIdx^:^0^},^5-66^:{^x^:5,^y^:66,^tileSymbol^:^ʺ^,^tilesetIdx^:^0^},^5-67^:{^x^:5,^y^:67,^tileSymbol^:^˂^,^tilesetIdx^:^0^},^5-68^:{^x^:5,^y^:68,^tileSymbol^:^ˊ^,^tilesetIdx^:^0^},^5-69^:{^x^:5,^y^:69,^tileSymbol^:^˒^,^tilesetIdx^:^0^},^5-70^:{^x^:5,^y^:70,^tileSymbol^:^˚^,^tilesetIdx^:^0^},^5-71^:{^x^:5,^y^:71,^tileSymbol^:^ˢ^,^tilesetIdx^:^0^},^5-72^:{^x^:5,^y^:72,^tileSymbol^:^˪^,^tilesetIdx^:^0^},^5-73^:{^x^:5,^y^:73,^tileSymbol^:^˲^,^tilesetIdx^:^0^},^5-74^:{^x^:5,^y^:74,^tileSymbol^:^˺^,^tilesetIdx^:^0^},^5-75^:{^x^:5,^y^:75,^tileSymbol^:^̂^,^tilesetIdx^:^0^},^5-76^:{^x^:5,^y^:76,^tileSymbol^:^̊^,^tilesetIdx^:^0^},^5-77^:{^x^:5,^y^:77,^tileSymbol^:^̒^,^tilesetIdx^:^0^},^5-78^:{^x^:5,^y^:78,^tileSymbol^:^̚^,^tilesetIdx^:^0^},^5-79^:{^x^:5,^y^:79,^tileSymbol^:^̢^,^tilesetIdx^:^0^},^5-80^:{^x^:5,^y^:80,^tileSymbol^:^̪^,^tilesetIdx^:^0^},^5-81^:{^x^:5,^y^:81,^tileSymbol^:^̲^,^tilesetIdx^:^0^},^5-82^:{^x^:5,^y^:82,^tileSymbol^:^̺^,^tilesetIdx^:^0^},^5-83^:{^x^:5,^y^:83,^tileSymbol^:^͂^,^tilesetIdx^:^0^},^5-84^:{^x^:5,^y^:84,^tileSymbol^:^͊^,^tilesetIdx^:^0^},^5-85^:{^x^:5,^y^:85,^tileSymbol^:^͒^,^tilesetIdx^:^0^},^5-86^:{^x^:5,^y^:86,^tileSymbol^:^͚^,^tilesetIdx^:^0^},^5-87^:{^x^:5,^y^:87,^tileSymbol^:^͢^,^tilesetIdx^:^0^},^5-88^:{^x^:5,^y^:88,^tileSymbol^:^ͪ^,^tilesetIdx^:^0^},^5-89^:{^x^:5,^y^:89,^tileSymbol^:^Ͳ^,^tilesetIdx^:^0^},^5-90^:{^x^:5,^y^:90,^tileSymbol^:^ͺ^,^tilesetIdx^:^0^},^5-91^:{^x^:5,^y^:91,^tileSymbol^:^΂^,^tilesetIdx^:^0^},^5-92^:{^x^:5,^y^:92,^tileSymbol^:^Ί^,^tilesetIdx^:^0^},^5-93^:{^x^:5,^y^:93,^tileSymbol^:^Β^,^tilesetIdx^:^0^},^5-94^:{^x^:5,^y^:94,^tileSymbol^:^Κ^,^tilesetIdx^:^0^},^5-95^:{^x^:5,^y^:95,^tileSymbol^:^΢^,^tilesetIdx^:^0^},^5-96^:{^x^:5,^y^:96,^tileSymbol^:^Ϊ^,^tilesetIdx^:^0^},^5-97^:{^x^:5,^y^:97,^tileSymbol^:^β^,^tilesetIdx^:^0^},^5-98^:{^x^:5,^y^:98,^tileSymbol^:^κ^,^tilesetIdx^:^0^},^5-99^:{^x^:5,^y^:99,^tileSymbol^:^ς^,^tilesetIdx^:^0^},^6-10^:{^x^:6,^y^:10,^tileSymbol^:^û^,^tilesetIdx^:^0^},^6-11^:{^x^:6,^y^:11,^tileSymbol^:^ă^,^tilesetIdx^:^0^},^6-12^:{^x^:6,^y^:12,^tileSymbol^:^ċ^,^tilesetIdx^:^0^},^6-13^:{^x^:6,^y^:13,^tileSymbol^:^ē^,^tilesetIdx^:^0^},^6-14^:{^x^:6,^y^:14,^tileSymbol^:^ě^,^tilesetIdx^:^0^},^6-15^:{^x^:6,^y^:15,^tileSymbol^:^ģ^,^tilesetIdx^:^0^},^6-16^:{^x^:6,^y^:16,^tileSymbol^:^ī^,^tilesetIdx^:^0^},^6-17^:{^x^:6,^y^:17,^tileSymbol^:^ĳ^,^tilesetIdx^:^0^},^6-18^:{^x^:6,^y^:18,^tileSymbol^:^Ļ^,^tilesetIdx^:^0^},^6-19^:{^x^:6,^y^:19,^tileSymbol^:^Ń^,^tilesetIdx^:^0^},^6-20^:{^x^:6,^y^:20,^tileSymbol^:^ŋ^,^tilesetIdx^:^0^},^6-21^:{^x^:6,^y^:21,^tileSymbol^:^œ^,^tilesetIdx^:^0^},^6-22^:{^x^:6,^y^:22,^tileSymbol^:^ś^,^tilesetIdx^:^0^},^6-23^:{^x^:6,^y^:23,^tileSymbol^:^ţ^,^tilesetIdx^:^0^},^6-24^:{^x^:6,^y^:24,^tileSymbol^:^ū^,^tilesetIdx^:^0^},^6-25^:{^x^:6,^y^:25,^tileSymbol^:^ų^,^tilesetIdx^:^0^},^6-26^:{^x^:6,^y^:26,^tileSymbol^:^Ż^,^tilesetIdx^:^0^},^6-27^:{^x^:6,^y^:27,^tileSymbol^:^ƃ^,^tilesetIdx^:^0^},^6-28^:{^x^:6,^y^:28,^tileSymbol^:^Ƌ^,^tilesetIdx^:^0^},^6-29^:{^x^:6,^y^:29,^tileSymbol^:^Ɠ^,^tilesetIdx^:^0^},^6-30^:{^x^:6,^y^:30,^tileSymbol^:^ƛ^,^tilesetIdx^:^0^},^6-31^:{^x^:6,^y^:31,^tileSymbol^:^ƣ^,^tilesetIdx^:^0^},^6-32^:{^x^:6,^y^:32,^tileSymbol^:^ƫ^,^tilesetIdx^:^0^},^6-33^:{^x^:6,^y^:33,^tileSymbol^:^Ƴ^,^tilesetIdx^:^0^},^6-34^:{^x^:6,^y^:34,^tileSymbol^:^ƻ^,^tilesetIdx^:^0^},^6-35^:{^x^:6,^y^:35,^tileSymbol^:^ǃ^,^tilesetIdx^:^0^},^6-36^:{^x^:6,^y^:36,^tileSymbol^:^ǋ^,^tilesetIdx^:^0^},^6-37^:{^x^:6,^y^:37,^tileSymbol^:^Ǔ^,^tilesetIdx^:^0^},^6-38^:{^x^:6,^y^:38,^tileSymbol^:^Ǜ^,^tilesetIdx^:^0^},^6-39^:{^x^:6,^y^:39,^tileSymbol^:^ǣ^,^tilesetIdx^:^0^},^6-40^:{^x^:6,^y^:40,^tileSymbol^:^ǫ^,^tilesetIdx^:^0^},^6-41^:{^x^:6,^y^:41,^tileSymbol^:^ǳ^,^tilesetIdx^:^0^},^6-42^:{^x^:6,^y^:42,^tileSymbol^:^ǻ^,^tilesetIdx^:^0^},^6-43^:{^x^:6,^y^:43,^tileSymbol^:^ȃ^,^tilesetIdx^:^0^},^6-44^:{^x^:6,^y^:44,^tileSymbol^:^ȋ^,^tilesetIdx^:^0^},^6-45^:{^x^:6,^y^:45,^tileSymbol^:^ȓ^,^tilesetIdx^:^0^},^6-46^:{^x^:6,^y^:46,^tileSymbol^:^ț^,^tilesetIdx^:^0^},^6-47^:{^x^:6,^y^:47,^tileSymbol^:^ȣ^,^tilesetIdx^:^0^},^6-48^:{^x^:6,^y^:48,^tileSymbol^:^ȫ^,^tilesetIdx^:^0^},^6-49^:{^x^:6,^y^:49,^tileSymbol^:^ȳ^,^tilesetIdx^:^0^},^6-50^:{^x^:6,^y^:50,^tileSymbol^:^Ȼ^,^tilesetIdx^:^0^},^6-51^:{^x^:6,^y^:51,^tileSymbol^:^Ƀ^,^tilesetIdx^:^0^},^6-52^:{^x^:6,^y^:52,^tileSymbol^:^ɋ^,^tilesetIdx^:^0^},^6-53^:{^x^:6,^y^:53,^tileSymbol^:^ɓ^,^tilesetIdx^:^0^},^6-54^:{^x^:6,^y^:54,^tileSymbol^:^ɛ^,^tilesetIdx^:^0^},^6-55^:{^x^:6,^y^:55,^tileSymbol^:^ɣ^,^tilesetIdx^:^0^},^6-56^:{^x^:6,^y^:56,^tileSymbol^:^ɫ^,^tilesetIdx^:^0^},^6-57^:{^x^:6,^y^:57,^tileSymbol^:^ɳ^,^tilesetIdx^:^0^},^6-58^:{^x^:6,^y^:58,^tileSymbol^:^ɻ^,^tilesetIdx^:^0^},^6-59^:{^x^:6,^y^:59,^tileSymbol^:^ʃ^,^tilesetIdx^:^0^},^6-60^:{^x^:6,^y^:60,^tileSymbol^:^ʋ^,^tilesetIdx^:^0^},^6-61^:{^x^:6,^y^:61,^tileSymbol^:^ʓ^,^tilesetIdx^:^0^},^6-62^:{^x^:6,^y^:62,^tileSymbol^:^ʛ^,^tilesetIdx^:^0^},^6-63^:{^x^:6,^y^:63,^tileSymbol^:^ʣ^,^tilesetIdx^:^0^},^6-64^:{^x^:6,^y^:64,^tileSymbol^:^ʫ^,^tilesetIdx^:^0^},^6-65^:{^x^:6,^y^:65,^tileSymbol^:^ʳ^,^tilesetIdx^:^0^},^6-66^:{^x^:6,^y^:66,^tileSymbol^:^ʻ^,^tilesetIdx^:^0^},^6-67^:{^x^:6,^y^:67,^tileSymbol^:^˃^,^tilesetIdx^:^0^},^6-68^:{^x^:6,^y^:68,^tileSymbol^:^ˋ^,^tilesetIdx^:^0^},^6-69^:{^x^:6,^y^:69,^tileSymbol^:^˓^,^tilesetIdx^:^0^},^6-70^:{^x^:6,^y^:70,^tileSymbol^:^˛^,^tilesetIdx^:^0^},^6-71^:{^x^:6,^y^:71,^tileSymbol^:^ˣ^,^tilesetIdx^:^0^},^6-72^:{^x^:6,^y^:72,^tileSymbol^:^˫^,^tilesetIdx^:^0^},^6-73^:{^x^:6,^y^:73,^tileSymbol^:^˳^,^tilesetIdx^:^0^},^6-74^:{^x^:6,^y^:74,^tileSymbol^:^˻^,^tilesetIdx^:^0^},^6-75^:{^x^:6,^y^:75,^tileSymbol^:^̃^,^tilesetIdx^:^0^},^6-76^:{^x^:6,^y^:76,^tileSymbol^:^̋^,^tilesetIdx^:^0^},^6-77^:{^x^:6,^y^:77,^tileSymbol^:^̓^,^tilesetIdx^:^0^},^6-78^:{^x^:6,^y^:78,^tileSymbol^:^̛^,^tilesetIdx^:^0^},^6-79^:{^x^:6,^y^:79,^tileSymbol^:^̣^,^tilesetIdx^:^0^},^6-80^:{^x^:6,^y^:80,^tileSymbol^:^̫^,^tilesetIdx^:^0^},^6-81^:{^x^:6,^y^:81,^tileSymbol^:^̳^,^tilesetIdx^:^0^},^6-82^:{^x^:6,^y^:82,^tileSymbol^:^̻^,^tilesetIdx^:^0^},^6-83^:{^x^:6,^y^:83,^tileSymbol^:^̓^,^tilesetIdx^:^0^},^6-84^:{^x^:6,^y^:84,^tileSymbol^:^͋^,^tilesetIdx^:^0^},^6-85^:{^x^:6,^y^:85,^tileSymbol^:^͓^,^tilesetIdx^:^0^},^6-86^:{^x^:6,^y^:86,^tileSymbol^:^͛^,^tilesetIdx^:^0^},^6-87^:{^x^:6,^y^:87,^tileSymbol^:^ͣ^,^tilesetIdx^:^0^},^6-88^:{^x^:6,^y^:88,^tileSymbol^:^ͫ^,^tilesetIdx^:^0^},^6-89^:{^x^:6,^y^:89,^tileSymbol^:^ͳ^,^tilesetIdx^:^0^},^6-90^:{^x^:6,^y^:90,^tileSymbol^:^ͻ^,^tilesetIdx^:^0^},^6-91^:{^x^:6,^y^:91,^tileSymbol^:^΃^,^tilesetIdx^:^0^},^6-92^:{^x^:6,^y^:92,^tileSymbol^:^΋^,^tilesetIdx^:^0^},^6-93^:{^x^:6,^y^:93,^tileSymbol^:^Γ^,^tilesetIdx^:^0^},^6-94^:{^x^:6,^y^:94,^tileSymbol^:^Λ^,^tilesetIdx^:^0^},^6-95^:{^x^:6,^y^:95,^tileSymbol^:^Σ^,^tilesetIdx^:^0^},^6-96^:{^x^:6,^y^:96,^tileSymbol^:^Ϋ^,^tilesetIdx^:^0^},^6-97^:{^x^:6,^y^:97,^tileSymbol^:^γ^,^tilesetIdx^:^0^},^6-98^:{^x^:6,^y^:98,^tileSymbol^:^λ^,^tilesetIdx^:^0^},^6-99^:{^x^:6,^y^:99,^tileSymbol^:^σ^,^tilesetIdx^:^0^},^7-10^:{^x^:7,^y^:10,^tileSymbol^:^ü^,^tilesetIdx^:^0^},^7-11^:{^x^:7,^y^:11,^tileSymbol^:^Ą^,^tilesetIdx^:^0^},^7-12^:{^x^:7,^y^:12,^tileSymbol^:^Č^,^tilesetIdx^:^0^},^7-13^:{^x^:7,^y^:13,^tileSymbol^:^Ĕ^,^tilesetIdx^:^0^},^7-14^:{^x^:7,^y^:14,^tileSymbol^:^Ĝ^,^tilesetIdx^:^0^},^7-15^:{^x^:7,^y^:15,^tileSymbol^:^Ĥ^,^tilesetIdx^:^0^},^7-16^:{^x^:7,^y^:16,^tileSymbol^:^Ĭ^,^tilesetIdx^:^0^},^7-17^:{^x^:7,^y^:17,^tileSymbol^:^Ĵ^,^tilesetIdx^:^0^},^7-18^:{^x^:7,^y^:18,^tileSymbol^:^ļ^,^tilesetIdx^:^0^},^7-19^:{^x^:7,^y^:19,^tileSymbol^:^ń^,^tilesetIdx^:^0^},^7-20^:{^x^:7,^y^:20,^tileSymbol^:^Ō^,^tilesetIdx^:^0^},^7-21^:{^x^:7,^y^:21,^tileSymbol^:^Ŕ^,^tilesetIdx^:^0^},^7-22^:{^x^:7,^y^:22,^tileSymbol^:^Ŝ^,^tilesetIdx^:^0^},^7-23^:{^x^:7,^y^:23,^tileSymbol^:^Ť^,^tilesetIdx^:^0^},^7-24^:{^x^:7,^y^:24,^tileSymbol^:^Ŭ^,^tilesetIdx^:^0^},^7-25^:{^x^:7,^y^:25,^tileSymbol^:^Ŵ^,^tilesetIdx^:^0^},^7-26^:{^x^:7,^y^:26,^tileSymbol^:^ż^,^tilesetIdx^:^0^},^7-27^:{^x^:7,^y^:27,^tileSymbol^:^Ƅ^,^tilesetIdx^:^0^},^7-28^:{^x^:7,^y^:28,^tileSymbol^:^ƌ^,^tilesetIdx^:^0^},^7-29^:{^x^:7,^y^:29,^tileSymbol^:^Ɣ^,^tilesetIdx^:^0^},^7-30^:{^x^:7,^y^:30,^tileSymbol^:^Ɯ^,^tilesetIdx^:^0^},^7-31^:{^x^:7,^y^:31,^tileSymbol^:^Ƥ^,^tilesetIdx^:^0^},^7-32^:{^x^:7,^y^:32,^tileSymbol^:^Ƭ^,^tilesetIdx^:^0^},^7-33^:{^x^:7,^y^:33,^tileSymbol^:^ƴ^,^tilesetIdx^:^0^},^7-34^:{^x^:7,^y^:34,^tileSymbol^:^Ƽ^,^tilesetIdx^:^0^},^7-35^:{^x^:7,^y^:35,^tileSymbol^:^Ǆ^,^tilesetIdx^:^0^},^7-36^:{^x^:7,^y^:36,^tileSymbol^:^ǌ^,^tilesetIdx^:^0^},^7-37^:{^x^:7,^y^:37,^tileSymbol^:^ǔ^,^tilesetIdx^:^0^},^7-38^:{^x^:7,^y^:38,^tileSymbol^:^ǜ^,^tilesetIdx^:^0^},^7-39^:{^x^:7,^y^:39,^tileSymbol^:^Ǥ^,^tilesetIdx^:^0^},^7-40^:{^x^:7,^y^:40,^tileSymbol^:^Ǭ^,^tilesetIdx^:^0^},^7-41^:{^x^:7,^y^:41,^tileSymbol^:^Ǵ^,^tilesetIdx^:^0^},^7-42^:{^x^:7,^y^:42,^tileSymbol^:^Ǽ^,^tilesetIdx^:^0^},^7-43^:{^x^:7,^y^:43,^tileSymbol^:^Ȅ^,^tilesetIdx^:^0^},^7-44^:{^x^:7,^y^:44,^tileSymbol^:^Ȍ^,^tilesetIdx^:^0^},^7-45^:{^x^:7,^y^:45,^tileSymbol^:^Ȕ^,^tilesetIdx^:^0^},^7-46^:{^x^:7,^y^:46,^tileSymbol^:^Ȝ^,^tilesetIdx^:^0^},^7-47^:{^x^:7,^y^:47,^tileSymbol^:^Ȥ^,^tilesetIdx^:^0^},^7-48^:{^x^:7,^y^:48,^tileSymbol^:^Ȭ^,^tilesetIdx^:^0^},^7-49^:{^x^:7,^y^:49,^tileSymbol^:^ȴ^,^tilesetIdx^:^0^},^7-50^:{^x^:7,^y^:50,^tileSymbol^:^ȼ^,^tilesetIdx^:^0^},^7-51^:{^x^:7,^y^:51,^tileSymbol^:^Ʉ^,^tilesetIdx^:^0^},^7-52^:{^x^:7,^y^:52,^tileSymbol^:^Ɍ^,^tilesetIdx^:^0^},^7-53^:{^x^:7,^y^:53,^tileSymbol^:^ɔ^,^tilesetIdx^:^0^},^7-54^:{^x^:7,^y^:54,^tileSymbol^:^ɜ^,^tilesetIdx^:^0^},^7-55^:{^x^:7,^y^:55,^tileSymbol^:^ɤ^,^tilesetIdx^:^0^},^7-56^:{^x^:7,^y^:56,^tileSymbol^:^ɬ^,^tilesetIdx^:^0^},^7-57^:{^x^:7,^y^:57,^tileSymbol^:^ɴ^,^tilesetIdx^:^0^},^7-58^:{^x^:7,^y^:58,^tileSymbol^:^ɼ^,^tilesetIdx^:^0^},^7-59^:{^x^:7,^y^:59,^tileSymbol^:^ʄ^,^tilesetIdx^:^0^},^7-60^:{^x^:7,^y^:60,^tileSymbol^:^ʌ^,^tilesetIdx^:^0^},^7-61^:{^x^:7,^y^:61,^tileSymbol^:^ʔ^,^tilesetIdx^:^0^},^7-62^:{^x^:7,^y^:62,^tileSymbol^:^ʜ^,^tilesetIdx^:^0^},^7-63^:{^x^:7,^y^:63,^tileSymbol^:^ʤ^,^tilesetIdx^:^0^},^7-64^:{^x^:7,^y^:64,^tileSymbol^:^ʬ^,^tilesetIdx^:^0^},^7-65^:{^x^:7,^y^:65,^tileSymbol^:^ʴ^,^tilesetIdx^:^0^},^7-66^:{^x^:7,^y^:66,^tileSymbol^:^ʼ^,^tilesetIdx^:^0^},^7-67^:{^x^:7,^y^:67,^tileSymbol^:^˄^,^tilesetIdx^:^0^},^7-68^:{^x^:7,^y^:68,^tileSymbol^:^ˌ^,^tilesetIdx^:^0^},^7-69^:{^x^:7,^y^:69,^tileSymbol^:^˔^,^tilesetIdx^:^0^},^7-70^:{^x^:7,^y^:70,^tileSymbol^:^˜^,^tilesetIdx^:^0^},^7-71^:{^x^:7,^y^:71,^tileSymbol^:^ˤ^,^tilesetIdx^:^0^},^7-72^:{^x^:7,^y^:72,^tileSymbol^:^ˬ^,^tilesetIdx^:^0^},^7-73^:{^x^:7,^y^:73,^tileSymbol^:^˴^,^tilesetIdx^:^0^},^7-74^:{^x^:7,^y^:74,^tileSymbol^:^˼^,^tilesetIdx^:^0^},^7-75^:{^x^:7,^y^:75,^tileSymbol^:^̄^,^tilesetIdx^:^0^},^7-76^:{^x^:7,^y^:76,^tileSymbol^:^̌^,^tilesetIdx^:^0^},^7-77^:{^x^:7,^y^:77,^tileSymbol^:^̔^,^tilesetIdx^:^0^},^7-78^:{^x^:7,^y^:78,^tileSymbol^:^̜^,^tilesetIdx^:^0^},^7-79^:{^x^:7,^y^:79,^tileSymbol^:^̤^,^tilesetIdx^:^0^},^7-80^:{^x^:7,^y^:80,^tileSymbol^:^̬^,^tilesetIdx^:^0^},^7-81^:{^x^:7,^y^:81,^tileSymbol^:^̴^,^tilesetIdx^:^0^},^7-82^:{^x^:7,^y^:82,^tileSymbol^:^̼^,^tilesetIdx^:^0^},^7-83^:{^x^:7,^y^:83,^tileSymbol^:^̈́^,^tilesetIdx^:^0^},^7-84^:{^x^:7,^y^:84,^tileSymbol^:^͌^,^tilesetIdx^:^0^},^7-85^:{^x^:7,^y^:85,^tileSymbol^:^͔^,^tilesetIdx^:^0^},^7-86^:{^x^:7,^y^:86,^tileSymbol^:^͜^,^tilesetIdx^:^0^},^7-87^:{^x^:7,^y^:87,^tileSymbol^:^ͤ^,^tilesetIdx^:^0^},^7-88^:{^x^:7,^y^:88,^tileSymbol^:^ͬ^,^tilesetIdx^:^0^},^7-89^:{^x^:7,^y^:89,^tileSymbol^:^ʹ^,^tilesetIdx^:^0^},^7-90^:{^x^:7,^y^:90,^tileSymbol^:^ͼ^,^tilesetIdx^:^0^},^7-91^:{^x^:7,^y^:91,^tileSymbol^:^΄^,^tilesetIdx^:^0^},^7-92^:{^x^:7,^y^:92,^tileSymbol^:^Ό^,^tilesetIdx^:^0^},^7-93^:{^x^:7,^y^:93,^tileSymbol^:^Δ^,^tilesetIdx^:^0^},^7-94^:{^x^:7,^y^:94,^tileSymbol^:^Μ^,^tilesetIdx^:^0^},^7-95^:{^x^:7,^y^:95,^tileSymbol^:^Τ^,^tilesetIdx^:^0^},^7-96^:{^x^:7,^y^:96,^tileSymbol^:^ά^,^tilesetIdx^:^0^},^7-97^:{^x^:7,^y^:97,^tileSymbol^:^δ^,^tilesetIdx^:^0^},^7-98^:{^x^:7,^y^:98,^tileSymbol^:^μ^,^tilesetIdx^:^0^},^7-99^:{^x^:7,^y^:99,^tileSymbol^:^τ^,^tilesetIdx^:^0^},^0-100^:{^x^:0,^y^:100,^tileSymbol^:^υ^,^tilesetIdx^:^0^},^0-101^:{^x^:0,^y^:101,^tileSymbol^:^ύ^,^tilesetIdx^:^0^},^0-102^:{^x^:0,^y^:102,^tileSymbol^:^ϕ^,^tilesetIdx^:^0^},^0-103^:{^x^:0,^y^:103,^tileSymbol^:^ϝ^,^tilesetIdx^:^0^},^0-104^:{^x^:0,^y^:104,^tileSymbol^:^ϥ^,^tilesetIdx^:^0^},^0-105^:{^x^:0,^y^:105,^tileSymbol^:^ϭ^,^tilesetIdx^:^0^},^0-106^:{^x^:0,^y^:106,^tileSymbol^:^ϵ^,^tilesetIdx^:^0^},^0-107^:{^x^:0,^y^:107,^tileSymbol^:^Ͻ^,^tilesetIdx^:^0^},^0-108^:{^x^:0,^y^:108,^tileSymbol^:^Ѕ^,^tilesetIdx^:^0^},^0-109^:{^x^:0,^y^:109,^tileSymbol^:^Ѝ^,^tilesetIdx^:^0^},^0-110^:{^x^:0,^y^:110,^tileSymbol^:^Е^,^tilesetIdx^:^0^},^0-111^:{^x^:0,^y^:111,^tileSymbol^:^Н^,^tilesetIdx^:^0^},^0-112^:{^x^:0,^y^:112,^tileSymbol^:^Х^,^tilesetIdx^:^0^},^0-113^:{^x^:0,^y^:113,^tileSymbol^:^Э^,^tilesetIdx^:^0^},^0-114^:{^x^:0,^y^:114,^tileSymbol^:^е^,^tilesetIdx^:^0^},^0-115^:{^x^:0,^y^:115,^tileSymbol^:^н^,^tilesetIdx^:^0^},^0-116^:{^x^:0,^y^:116,^tileSymbol^:^х^,^tilesetIdx^:^0^},^0-117^:{^x^:0,^y^:117,^tileSymbol^:^э^,^tilesetIdx^:^0^},^0-118^:{^x^:0,^y^:118,^tileSymbol^:^ѕ^,^tilesetIdx^:^0^},^0-119^:{^x^:0,^y^:119,^tileSymbol^:^ѝ^,^tilesetIdx^:^0^},^0-120^:{^x^:0,^y^:120,^tileSymbol^:^ѥ^,^tilesetIdx^:^0^},^0-121^:{^x^:0,^y^:121,^tileSymbol^:^ѭ^,^tilesetIdx^:^0^},^0-122^:{^x^:0,^y^:122,^tileSymbol^:^ѵ^,^tilesetIdx^:^0^},^0-123^:{^x^:0,^y^:123,^tileSymbol^:^ѽ^,^tilesetIdx^:^0^},^0-124^:{^x^:0,^y^:124,^tileSymbol^:^҅^,^tilesetIdx^:^0^},^0-125^:{^x^:0,^y^:125,^tileSymbol^:^ҍ^,^tilesetIdx^:^0^},^0-126^:{^x^:0,^y^:126,^tileSymbol^:^ҕ^,^tilesetIdx^:^0^},^0-127^:{^x^:0,^y^:127,^tileSymbol^:^ҝ^,^tilesetIdx^:^0^},^0-128^:{^x^:0,^y^:128,^tileSymbol^:^ҥ^,^tilesetIdx^:^0^},^0-129^:{^x^:0,^y^:129,^tileSymbol^:^ҭ^,^tilesetIdx^:^0^},^0-130^:{^x^:0,^y^:130,^tileSymbol^:^ҵ^,^tilesetIdx^:^0^},^0-131^:{^x^:0,^y^:131,^tileSymbol^:^ҽ^,^tilesetIdx^:^0^},^0-132^:{^x^:0,^y^:132,^tileSymbol^:^Ӆ^,^tilesetIdx^:^0^},^1-100^:{^x^:1,^y^:100,^tileSymbol^:^φ^,^tilesetIdx^:^0^},^1-101^:{^x^:1,^y^:101,^tileSymbol^:^ώ^,^tilesetIdx^:^0^},^1-102^:{^x^:1,^y^:102,^tileSymbol^:^ϖ^,^tilesetIdx^:^0^},^1-103^:{^x^:1,^y^:103,^tileSymbol^:^Ϟ^,^tilesetIdx^:^0^},^1-104^:{^x^:1,^y^:104,^tileSymbol^:^Ϧ^,^tilesetIdx^:^0^},^1-105^:{^x^:1,^y^:105,^tileSymbol^:^Ϯ^,^tilesetIdx^:^0^},^1-106^:{^x^:1,^y^:106,^tileSymbol^:^϶^,^tilesetIdx^:^0^},^1-107^:{^x^:1,^y^:107,^tileSymbol^:^Ͼ^,^tilesetIdx^:^0^},^1-108^:{^x^:1,^y^:108,^tileSymbol^:^І^,^tilesetIdx^:^0^},^1-109^:{^x^:1,^y^:109,^tileSymbol^:^Ў^,^tilesetIdx^:^0^},^1-110^:{^x^:1,^y^:110,^tileSymbol^:^Ж^,^tilesetIdx^:^0^},^1-111^:{^x^:1,^y^:111,^tileSymbol^:^О^,^tilesetIdx^:^0^},^1-112^:{^x^:1,^y^:112,^tileSymbol^:^Ц^,^tilesetIdx^:^0^},^1-113^:{^x^:1,^y^:113,^tileSymbol^:^Ю^,^tilesetIdx^:^0^},^1-114^:{^x^:1,^y^:114,^tileSymbol^:^ж^,^tilesetIdx^:^0^},^1-115^:{^x^:1,^y^:115,^tileSymbol^:^о^,^tilesetIdx^:^0^},^1-116^:{^x^:1,^y^:116,^tileSymbol^:^ц^,^tilesetIdx^:^0^},^1-117^:{^x^:1,^y^:117,^tileSymbol^:^ю^,^tilesetIdx^:^0^},^1-118^:{^x^:1,^y^:118,^tileSymbol^:^і^,^tilesetIdx^:^0^},^1-119^:{^x^:1,^y^:119,^tileSymbol^:^ў^,^tilesetIdx^:^0^},^1-120^:{^x^:1,^y^:120,^tileSymbol^:^Ѧ^,^tilesetIdx^:^0^},^1-121^:{^x^:1,^y^:121,^tileSymbol^:^Ѯ^,^tilesetIdx^:^0^},^1-122^:{^x^:1,^y^:122,^tileSymbol^:^Ѷ^,^tilesetIdx^:^0^},^1-123^:{^x^:1,^y^:123,^tileSymbol^:^Ѿ^,^tilesetIdx^:^0^},^1-124^:{^x^:1,^y^:124,^tileSymbol^:^҆^,^tilesetIdx^:^0^},^1-125^:{^x^:1,^y^:125,^tileSymbol^:^Ҏ^,^tilesetIdx^:^0^},^1-126^:{^x^:1,^y^:126,^tileSymbol^:^Җ^,^tilesetIdx^:^0^},^1-127^:{^x^:1,^y^:127,^tileSymbol^:^Ҟ^,^tilesetIdx^:^0^},^1-128^:{^x^:1,^y^:128,^tileSymbol^:^Ҧ^,^tilesetIdx^:^0^},^1-129^:{^x^:1,^y^:129,^tileSymbol^:^Ү^,^tilesetIdx^:^0^},^1-130^:{^x^:1,^y^:130,^tileSymbol^:^Ҷ^,^tilesetIdx^:^0^},^1-131^:{^x^:1,^y^:131,^tileSymbol^:^Ҿ^,^tilesetIdx^:^0^},^1-132^:{^x^:1,^y^:132,^tileSymbol^:^ӆ^,^tilesetIdx^:^0^},^2-100^:{^x^:2,^y^:100,^tileSymbol^:^χ^,^tilesetIdx^:^0^},^2-101^:{^x^:2,^y^:101,^tileSymbol^:^Ϗ^,^tilesetIdx^:^0^},^2-102^:{^x^:2,^y^:102,^tileSymbol^:^ϗ^,^tilesetIdx^:^0^},^2-103^:{^x^:2,^y^:103,^tileSymbol^:^ϟ^,^tilesetIdx^:^0^},^2-104^:{^x^:2,^y^:104,^tileSymbol^:^ϧ^,^tilesetIdx^:^0^},^2-105^:{^x^:2,^y^:105,^tileSymbol^:^ϯ^,^tilesetIdx^:^0^},^2-106^:{^x^:2,^y^:106,^tileSymbol^:^Ϸ^,^tilesetIdx^:^0^},^2-107^:{^x^:2,^y^:107,^tileSymbol^:^Ͽ^,^tilesetIdx^:^0^},^2-108^:{^x^:2,^y^:108,^tileSymbol^:^Ї^,^tilesetIdx^:^0^},^2-109^:{^x^:2,^y^:109,^tileSymbol^:^Џ^,^tilesetIdx^:^0^},^2-110^:{^x^:2,^y^:110,^tileSymbol^:^З^,^tilesetIdx^:^0^},^2-111^:{^x^:2,^y^:111,^tileSymbol^:^П^,^tilesetIdx^:^0^},^2-112^:{^x^:2,^y^:112,^tileSymbol^:^Ч^,^tilesetIdx^:^0^},^2-113^:{^x^:2,^y^:113,^tileSymbol^:^Я^,^tilesetIdx^:^0^},^2-114^:{^x^:2,^y^:114,^tileSymbol^:^з^,^tilesetIdx^:^0^},^2-115^:{^x^:2,^y^:115,^tileSymbol^:^п^,^tilesetIdx^:^0^},^2-116^:{^x^:2,^y^:116,^tileSymbol^:^ч^,^tilesetIdx^:^0^},^2-117^:{^x^:2,^y^:117,^tileSymbol^:^я^,^tilesetIdx^:^0^},^2-118^:{^x^:2,^y^:118,^tileSymbol^:^ї^,^tilesetIdx^:^0^},^2-119^:{^x^:2,^y^:119,^tileSymbol^:^џ^,^tilesetIdx^:^0^},^2-120^:{^x^:2,^y^:120,^tileSymbol^:^ѧ^,^tilesetIdx^:^0^},^2-121^:{^x^:2,^y^:121,^tileSymbol^:^ѯ^,^tilesetIdx^:^0^},^2-122^:{^x^:2,^y^:122,^tileSymbol^:^ѷ^,^tilesetIdx^:^0^},^2-123^:{^x^:2,^y^:123,^tileSymbol^:^ѿ^,^tilesetIdx^:^0^},^2-124^:{^x^:2,^y^:124,^tileSymbol^:^҇^,^tilesetIdx^:^0^},^2-125^:{^x^:2,^y^:125,^tileSymbol^:^ҏ^,^tilesetIdx^:^0^},^2-126^:{^x^:2,^y^:126,^tileSymbol^:^җ^,^tilesetIdx^:^0^},^2-127^:{^x^:2,^y^:127,^tileSymbol^:^ҟ^,^tilesetIdx^:^0^},^2-128^:{^x^:2,^y^:128,^tileSymbol^:^ҧ^,^tilesetIdx^:^0^},^2-129^:{^x^:2,^y^:129,^tileSymbol^:^ү^,^tilesetIdx^:^0^},^2-130^:{^x^:2,^y^:130,^tileSymbol^:^ҷ^,^tilesetIdx^:^0^},^2-131^:{^x^:2,^y^:131,^tileSymbol^:^ҿ^,^tilesetIdx^:^0^},^2-132^:{^x^:2,^y^:132,^tileSymbol^:^Ӈ^,^tilesetIdx^:^0^},^3-100^:{^x^:3,^y^:100,^tileSymbol^:^ψ^,^tilesetIdx^:^0^},^3-101^:{^x^:3,^y^:101,^tileSymbol^:^ϐ^,^tilesetIdx^:^0^},^3-102^:{^x^:3,^y^:102,^tileSymbol^:^Ϙ^,^tilesetIdx^:^0^},^3-103^:{^x^:3,^y^:103,^tileSymbol^:^Ϡ^,^tilesetIdx^:^0^},^3-104^:{^x^:3,^y^:104,^tileSymbol^:^Ϩ^,^tilesetIdx^:^0^},^3-105^:{^x^:3,^y^:105,^tileSymbol^:^ϰ^,^tilesetIdx^:^0^},^3-106^:{^x^:3,^y^:106,^tileSymbol^:^ϸ^,^tilesetIdx^:^0^},^3-107^:{^x^:3,^y^:107,^tileSymbol^:^Ѐ^,^tilesetIdx^:^0^},^3-108^:{^x^:3,^y^:108,^tileSymbol^:^Ј^,^tilesetIdx^:^0^},^3-109^:{^x^:3,^y^:109,^tileSymbol^:^А^,^tilesetIdx^:^0^},^3-110^:{^x^:3,^y^:110,^tileSymbol^:^И^,^tilesetIdx^:^0^},^3-111^:{^x^:3,^y^:111,^tileSymbol^:^Р^,^tilesetIdx^:^0^},^3-112^:{^x^:3,^y^:112,^tileSymbol^:^Ш^,^tilesetIdx^:^0^},^3-113^:{^x^:3,^y^:113,^tileSymbol^:^а^,^tilesetIdx^:^0^},^3-114^:{^x^:3,^y^:114,^tileSymbol^:^и^,^tilesetIdx^:^0^},^3-115^:{^x^:3,^y^:115,^tileSymbol^:^р^,^tilesetIdx^:^0^},^3-116^:{^x^:3,^y^:116,^tileSymbol^:^ш^,^tilesetIdx^:^0^},^3-117^:{^x^:3,^y^:117,^tileSymbol^:^ѐ^,^tilesetIdx^:^0^},^3-118^:{^x^:3,^y^:118,^tileSymbol^:^ј^,^tilesetIdx^:^0^},^3-119^:{^x^:3,^y^:119,^tileSymbol^:^Ѡ^,^tilesetIdx^:^0^},^3-120^:{^x^:3,^y^:120,^tileSymbol^:^Ѩ^,^tilesetIdx^:^0^},^3-121^:{^x^:3,^y^:121,^tileSymbol^:^Ѱ^,^tilesetIdx^:^0^},^3-122^:{^x^:3,^y^:122,^tileSymbol^:^Ѹ^,^tilesetIdx^:^0^},^3-123^:{^x^:3,^y^:123,^tileSymbol^:^Ҁ^,^tilesetIdx^:^0^},^3-124^:{^x^:3,^y^:124,^tileSymbol^:^҈^,^tilesetIdx^:^0^},^3-125^:{^x^:3,^y^:125,^tileSymbol^:^Ґ^,^tilesetIdx^:^0^},^3-126^:{^x^:3,^y^:126,^tileSymbol^:^Ҙ^,^tilesetIdx^:^0^},^3-127^:{^x^:3,^y^:127,^tileSymbol^:^Ҡ^,^tilesetIdx^:^0^},^3-128^:{^x^:3,^y^:128,^tileSymbol^:^Ҩ^,^tilesetIdx^:^0^},^3-129^:{^x^:3,^y^:129,^tileSymbol^:^Ұ^,^tilesetIdx^:^0^},^3-130^:{^x^:3,^y^:130,^tileSymbol^:^Ҹ^,^tilesetIdx^:^0^},^3-131^:{^x^:3,^y^:131,^tileSymbol^:^Ӏ^,^tilesetIdx^:^0^},^3-132^:{^x^:3,^y^:132,^tileSymbol^:^ӈ^,^tilesetIdx^:^0^},^4-100^:{^x^:4,^y^:100,^tileSymbol^:^ω^,^tilesetIdx^:^0^},^4-101^:{^x^:4,^y^:101,^tileSymbol^:^ϑ^,^tilesetIdx^:^0^},^4-102^:{^x^:4,^y^:102,^tileSymbol^:^ϙ^,^tilesetIdx^:^0^},^4-103^:{^x^:4,^y^:103,^tileSymbol^:^ϡ^,^tilesetIdx^:^0^},^4-104^:{^x^:4,^y^:104,^tileSymbol^:^ϩ^,^tilesetIdx^:^0^},^4-105^:{^x^:4,^y^:105,^tileSymbol^:^ϱ^,^tilesetIdx^:^0^},^4-106^:{^x^:4,^y^:106,^tileSymbol^:^Ϲ^,^tilesetIdx^:^0^},^4-107^:{^x^:4,^y^:107,^tileSymbol^:^Ё^,^tilesetIdx^:^0^},^4-108^:{^x^:4,^y^:108,^tileSymbol^:^Љ^,^tilesetIdx^:^0^},^4-109^:{^x^:4,^y^:109,^tileSymbol^:^Б^,^tilesetIdx^:^0^},^4-110^:{^x^:4,^y^:110,^tileSymbol^:^Й^,^tilesetIdx^:^0^},^4-111^:{^x^:4,^y^:111,^tileSymbol^:^С^,^tilesetIdx^:^0^},^4-112^:{^x^:4,^y^:112,^tileSymbol^:^Щ^,^tilesetIdx^:^0^},^4-113^:{^x^:4,^y^:113,^tileSymbol^:^б^,^tilesetIdx^:^0^},^4-114^:{^x^:4,^y^:114,^tileSymbol^:^й^,^tilesetIdx^:^0^},^4-115^:{^x^:4,^y^:115,^tileSymbol^:^с^,^tilesetIdx^:^0^},^4-116^:{^x^:4,^y^:116,^tileSymbol^:^щ^,^tilesetIdx^:^0^},^4-117^:{^x^:4,^y^:117,^tileSymbol^:^ё^,^tilesetIdx^:^0^},^4-118^:{^x^:4,^y^:118,^tileSymbol^:^љ^,^tilesetIdx^:^0^},^4-119^:{^x^:4,^y^:119,^tileSymbol^:^ѡ^,^tilesetIdx^:^0^},^4-120^:{^x^:4,^y^:120,^tileSymbol^:^ѩ^,^tilesetIdx^:^0^},^4-121^:{^x^:4,^y^:121,^tileSymbol^:^ѱ^,^tilesetIdx^:^0^},^4-122^:{^x^:4,^y^:122,^tileSymbol^:^ѹ^,^tilesetIdx^:^0^},^4-123^:{^x^:4,^y^:123,^tileSymbol^:^ҁ^,^tilesetIdx^:^0^},^4-124^:{^x^:4,^y^:124,^tileSymbol^:^҉^,^tilesetIdx^:^0^},^4-125^:{^x^:4,^y^:125,^tileSymbol^:^ґ^,^tilesetIdx^:^0^},^4-126^:{^x^:4,^y^:126,^tileSymbol^:^ҙ^,^tilesetIdx^:^0^},^4-127^:{^x^:4,^y^:127,^tileSymbol^:^ҡ^,^tilesetIdx^:^0^},^4-128^:{^x^:4,^y^:128,^tileSymbol^:^ҩ^,^tilesetIdx^:^0^},^4-129^:{^x^:4,^y^:129,^tileSymbol^:^ұ^,^tilesetIdx^:^0^},^4-130^:{^x^:4,^y^:130,^tileSymbol^:^ҹ^,^tilesetIdx^:^0^},^4-131^:{^x^:4,^y^:131,^tileSymbol^:^Ӂ^,^tilesetIdx^:^0^},^4-132^:{^x^:4,^y^:132,^tileSymbol^:^Ӊ^,^tilesetIdx^:^0^},^5-100^:{^x^:5,^y^:100,^tileSymbol^:^ϊ^,^tilesetIdx^:^0^},^5-101^:{^x^:5,^y^:101,^tileSymbol^:^ϒ^,^tilesetIdx^:^0^},^5-102^:{^x^:5,^y^:102,^tileSymbol^:^Ϛ^,^tilesetIdx^:^0^},^5-103^:{^x^:5,^y^:103,^tileSymbol^:^Ϣ^,^tilesetIdx^:^0^},^5-104^:{^x^:5,^y^:104,^tileSymbol^:^Ϫ^,^tilesetIdx^:^0^},^5-105^:{^x^:5,^y^:105,^tileSymbol^:^ϲ^,^tilesetIdx^:^0^},^5-106^:{^x^:5,^y^:106,^tileSymbol^:^Ϻ^,^tilesetIdx^:^0^},^5-107^:{^x^:5,^y^:107,^tileSymbol^:^Ђ^,^tilesetIdx^:^0^},^5-108^:{^x^:5,^y^:108,^tileSymbol^:^Њ^,^tilesetIdx^:^0^},^5-109^:{^x^:5,^y^:109,^tileSymbol^:^В^,^tilesetIdx^:^0^},^5-110^:{^x^:5,^y^:110,^tileSymbol^:^К^,^tilesetIdx^:^0^},^5-111^:{^x^:5,^y^:111,^tileSymbol^:^Т^,^tilesetIdx^:^0^},^5-112^:{^x^:5,^y^:112,^tileSymbol^:^Ъ^,^tilesetIdx^:^0^},^5-113^:{^x^:5,^y^:113,^tileSymbol^:^в^,^tilesetIdx^:^0^},^5-114^:{^x^:5,^y^:114,^tileSymbol^:^к^,^tilesetIdx^:^0^},^5-115^:{^x^:5,^y^:115,^tileSymbol^:^т^,^tilesetIdx^:^0^},^5-116^:{^x^:5,^y^:116,^tileSymbol^:^ъ^,^tilesetIdx^:^0^},^5-117^:{^x^:5,^y^:117,^tileSymbol^:^ђ^,^tilesetIdx^:^0^},^5-118^:{^x^:5,^y^:118,^tileSymbol^:^њ^,^tilesetIdx^:^0^},^5-119^:{^x^:5,^y^:119,^tileSymbol^:^Ѣ^,^tilesetIdx^:^0^},^5-120^:{^x^:5,^y^:120,^tileSymbol^:^Ѫ^,^tilesetIdx^:^0^},^5-121^:{^x^:5,^y^:121,^tileSymbol^:^Ѳ^,^tilesetIdx^:^0^},^5-122^:{^x^:5,^y^:122,^tileSymbol^:^Ѻ^,^tilesetIdx^:^0^},^5-123^:{^x^:5,^y^:123,^tileSymbol^:^҂^,^tilesetIdx^:^0^},^5-124^:{^x^:5,^y^:124,^tileSymbol^:^Ҋ^,^tilesetIdx^:^0^},^5-125^:{^x^:5,^y^:125,^tileSymbol^:^Ғ^,^tilesetIdx^:^0^},^5-126^:{^x^:5,^y^:126,^tileSymbol^:^Қ^,^tilesetIdx^:^0^},^5-127^:{^x^:5,^y^:127,^tileSymbol^:^Ң^,^tilesetIdx^:^0^},^5-128^:{^x^:5,^y^:128,^tileSymbol^:^Ҫ^,^tilesetIdx^:^0^},^5-129^:{^x^:5,^y^:129,^tileSymbol^:^Ҳ^,^tilesetIdx^:^0^},^5-130^:{^x^:5,^y^:130,^tileSymbol^:^Һ^,^tilesetIdx^:^0^},^5-131^:{^x^:5,^y^:131,^tileSymbol^:^ӂ^,^tilesetIdx^:^0^},^5-132^:{^x^:5,^y^:132,^tileSymbol^:^ӊ^,^tilesetIdx^:^0^},^6-100^:{^x^:6,^y^:100,^tileSymbol^:^ϋ^,^tilesetIdx^:^0^},^6-101^:{^x^:6,^y^:101,^tileSymbol^:^ϓ^,^tilesetIdx^:^0^},^6-102^:{^x^:6,^y^:102,^tileSymbol^:^ϛ^,^tilesetIdx^:^0^},^6-103^:{^x^:6,^y^:103,^tileSymbol^:^ϣ^,^tilesetIdx^:^0^},^6-104^:{^x^:6,^y^:104,^tileSymbol^:^ϫ^,^tilesetIdx^:^0^},^6-105^:{^x^:6,^y^:105,^tileSymbol^:^ϳ^,^tilesetIdx^:^0^},^6-106^:{^x^:6,^y^:106,^tileSymbol^:^ϻ^,^tilesetIdx^:^0^},^6-107^:{^x^:6,^y^:107,^tileSymbol^:^Ѓ^,^tilesetIdx^:^0^},^6-108^:{^x^:6,^y^:108,^tileSymbol^:^Ћ^,^tilesetIdx^:^0^},^6-109^:{^x^:6,^y^:109,^tileSymbol^:^Г^,^tilesetIdx^:^0^},^6-110^:{^x^:6,^y^:110,^tileSymbol^:^Л^,^tilesetIdx^:^0^},^6-111^:{^x^:6,^y^:111,^tileSymbol^:^У^,^tilesetIdx^:^0^},^6-112^:{^x^:6,^y^:112,^tileSymbol^:^Ы^,^tilesetIdx^:^0^},^6-113^:{^x^:6,^y^:113,^tileSymbol^:^г^,^tilesetIdx^:^0^},^6-114^:{^x^:6,^y^:114,^tileSymbol^:^л^,^tilesetIdx^:^0^},^6-115^:{^x^:6,^y^:115,^tileSymbol^:^у^,^tilesetIdx^:^0^},^6-116^:{^x^:6,^y^:116,^tileSymbol^:^ы^,^tilesetIdx^:^0^},^6-117^:{^x^:6,^y^:117,^tileSymbol^:^ѓ^,^tilesetIdx^:^0^},^6-118^:{^x^:6,^y^:118,^tileSymbol^:^ћ^,^tilesetIdx^:^0^},^6-119^:{^x^:6,^y^:119,^tileSymbol^:^ѣ^,^tilesetIdx^:^0^},^6-120^:{^x^:6,^y^:120,^tileSymbol^:^ѫ^,^tilesetIdx^:^0^},^6-121^:{^x^:6,^y^:121,^tileSymbol^:^ѳ^,^tilesetIdx^:^0^},^6-122^:{^x^:6,^y^:122,^tileSymbol^:^ѻ^,^tilesetIdx^:^0^},^6-123^:{^x^:6,^y^:123,^tileSymbol^:^҃^,^tilesetIdx^:^0^},^6-124^:{^x^:6,^y^:124,^tileSymbol^:^ҋ^,^tilesetIdx^:^0^},^6-125^:{^x^:6,^y^:125,^tileSymbol^:^ғ^,^tilesetIdx^:^0^},^6-126^:{^x^:6,^y^:126,^tileSymbol^:^қ^,^tilesetIdx^:^0^},^6-127^:{^x^:6,^y^:127,^tileSymbol^:^ң^,^tilesetIdx^:^0^},^6-128^:{^x^:6,^y^:128,^tileSymbol^:^ҫ^,^tilesetIdx^:^0^},^6-129^:{^x^:6,^y^:129,^tileSymbol^:^ҳ^,^tilesetIdx^:^0^},^6-130^:{^x^:6,^y^:130,^tileSymbol^:^һ^,^tilesetIdx^:^0^},^6-131^:{^x^:6,^y^:131,^tileSymbol^:^Ӄ^,^tilesetIdx^:^0^},^6-132^:{^x^:6,^y^:132,^tileSymbol^:^Ӌ^,^tilesetIdx^:^0^},^7-100^:{^x^:7,^y^:100,^tileSymbol^:^ό^,^tilesetIdx^:^0^},^7-101^:{^x^:7,^y^:101,^tileSymbol^:^ϔ^,^tilesetIdx^:^0^},^7-102^:{^x^:7,^y^:102,^tileSymbol^:^Ϝ^,^tilesetIdx^:^0^},^7-103^:{^x^:7,^y^:103,^tileSymbol^:^Ϥ^,^tilesetIdx^:^0^},^7-104^:{^x^:7,^y^:104,^tileSymbol^:^Ϭ^,^tilesetIdx^:^0^},^7-105^:{^x^:7,^y^:105,^tileSymbol^:^ϴ^,^tilesetIdx^:^0^},^7-106^:{^x^:7,^y^:106,^tileSymbol^:^ϼ^,^tilesetIdx^:^0^},^7-107^:{^x^:7,^y^:107,^tileSymbol^:^Є^,^tilesetIdx^:^0^},^7-108^:{^x^:7,^y^:108,^tileSymbol^:^Ќ^,^tilesetIdx^:^0^},^7-109^:{^x^:7,^y^:109,^tileSymbol^:^Д^,^tilesetIdx^:^0^},^7-110^:{^x^:7,^y^:110,^tileSymbol^:^М^,^tilesetIdx^:^0^},^7-111^:{^x^:7,^y^:111,^tileSymbol^:^Ф^,^tilesetIdx^:^0^},^7-112^:{^x^:7,^y^:112,^tileSymbol^:^Ь^,^tilesetIdx^:^0^},^7-113^:{^x^:7,^y^:113,^tileSymbol^:^д^,^tilesetIdx^:^0^},^7-114^:{^x^:7,^y^:114,^tileSymbol^:^м^,^tilesetIdx^:^0^},^7-115^:{^x^:7,^y^:115,^tileSymbol^:^ф^,^tilesetIdx^:^0^},^7-116^:{^x^:7,^y^:116,^tileSymbol^:^ь^,^tilesetIdx^:^0^},^7-117^:{^x^:7,^y^:117,^tileSymbol^:^є^,^tilesetIdx^:^0^},^7-118^:{^x^:7,^y^:118,^tileSymbol^:^ќ^,^tilesetIdx^:^0^},^7-119^:{^x^:7,^y^:119,^tileSymbol^:^Ѥ^,^tilesetIdx^:^0^},^7-120^:{^x^:7,^y^:120,^tileSymbol^:^Ѭ^,^tilesetIdx^:^0^},^7-121^:{^x^:7,^y^:121,^tileSymbol^:^Ѵ^,^tilesetIdx^:^0^},^7-122^:{^x^:7,^y^:122,^tileSymbol^:^Ѽ^,^tilesetIdx^:^0^},^7-123^:{^x^:7,^y^:123,^tileSymbol^:^҄^,^tilesetIdx^:^0^},^7-124^:{^x^:7,^y^:124,^tileSymbol^:^Ҍ^,^tilesetIdx^:^0^},^7-125^:{^x^:7,^y^:125,^tileSymbol^:^Ҕ^,^tilesetIdx^:^0^},^7-126^:{^x^:7,^y^:126,^tileSymbol^:^Ҝ^,^tilesetIdx^:^0^},^7-127^:{^x^:7,^y^:127,^tileSymbol^:^Ҥ^,^tilesetIdx^:^0^},^7-128^:{^x^:7,^y^:128,^tileSymbol^:^Ҭ^,^tilesetIdx^:^0^},^7-129^:{^x^:7,^y^:129,^tileSymbol^:^Ҵ^,^tilesetIdx^:^0^},^7-130^:{^x^:7,^y^:130,^tileSymbol^:^Ҽ^,^tilesetIdx^:^0^},^7-131^:{^x^:7,^y^:131,^tileSymbol^:^ӄ^,^tilesetIdx^:^0^},^7-132^:{^x^:7,^y^:132,^tileSymbol^:^ӌ^,^tilesetIdx^:^0^}},^tileSize^:32,^gridWidth^:8,^tileCount^:1064,^gridHeight^:133,^description^:^n/a^,^symbolStartIdx^:0},^1^:{^src^:^https://blurymind.github.io/tilemap-editor/free.png^,^name^:^tileset 1^,^tags^:{},^width^:160,^frames^:{},^height^:176,^tileData^:{^0-0^:{^x^:0,^y^:0,^tileSymbol^:^Ӎ^,^tilesetIdx^:^1^},^0-1^:{^x^:0,^y^:1,^tileSymbol^:^Ӓ^,^tilesetIdx^:^1^},^0-2^:{^x^:0,^y^:2,^tileSymbol^:^ӗ^,^tilesetIdx^:^1^},^0-3^:{^x^:0,^y^:3,^tileSymbol^:^Ӝ^,^tilesetIdx^:^1^},^0-4^:{^x^:0,^y^:4,^tileSymbol^:^ӡ^,^tilesetIdx^:^1^},^0-5^:{^x^:0,^y^:5,^tileSymbol^:^Ӧ^,^tilesetIdx^:^1^},^1-0^:{^x^:1,^y^:0,^tileSymbol^:^ӎ^,^tilesetIdx^:^1^},^1-1^:{^x^:1,^y^:1,^tileSymbol^:^ӓ^,^tilesetIdx^:^1^},^1-2^:{^x^:1,^y^:2,^tileSymbol^:^Ә^,^tilesetIdx^:^1^},^1-3^:{^x^:1,^y^:3,^tileSymbol^:^ӝ^,^tilesetIdx^:^1^},^1-4^:{^x^:1,^y^:4,^tileSymbol^:^Ӣ^,^tilesetIdx^:^1^},^1-5^:{^x^:1,^y^:5,^tileSymbol^:^ӧ^,^tilesetIdx^:^1^},^2-0^:{^x^:2,^y^:0,^tileSymbol^:^ӏ^,^tilesetIdx^:^1^},^2-1^:{^x^:2,^y^:1,^tileSymbol^:^Ӕ^,^tilesetIdx^:^1^},^2-2^:{^x^:2,^y^:2,^tileSymbol^:^ә^,^tilesetIdx^:^1^},^2-3^:{^x^:2,^y^:3,^tileSymbol^:^Ӟ^,^tilesetIdx^:^1^},^2-4^:{^x^:2,^y^:4,^tileSymbol^:^ӣ^,^tilesetIdx^:^1^},^2-5^:{^x^:2,^y^:5,^tileSymbol^:^Ө^,^tilesetIdx^:^1^},^3-0^:{^x^:3,^y^:0,^tileSymbol^:^Ӑ^,^tilesetIdx^:^1^},^3-1^:{^x^:3,^y^:1,^tileSymbol^:^ӕ^,^tilesetIdx^:^1^},^3-2^:{^x^:3,^y^:2,^tileSymbol^:^Ӛ^,^tilesetIdx^:^1^},^3-3^:{^x^:3,^y^:3,^tileSymbol^:^ӟ^,^tilesetIdx^:^1^},^3-4^:{^x^:3,^y^:4,^tileSymbol^:^Ӥ^,^tilesetIdx^:^1^},^3-5^:{^x^:3,^y^:5,^tileSymbol^:^ө^,^tilesetIdx^:^1^},^4-0^:{^x^:4,^y^:0,^tileSymbol^:^ӑ^,^tilesetIdx^:^1^},^4-1^:{^x^:4,^y^:1,^tileSymbol^:^Ӗ^,^tilesetIdx^:^1^},^4-2^:{^x^:4,^y^:2,^tileSymbol^:^ӛ^,^tilesetIdx^:^1^},^4-3^:{^x^:4,^y^:3,^tileSymbol^:^Ӡ^,^tilesetIdx^:^1^},^4-4^:{^x^:4,^y^:4,^tileSymbol^:^ӥ^,^tilesetIdx^:^1^},^4-5^:{^x^:4,^y^:5,^tileSymbol^:^Ӫ^,^tilesetIdx^:^1^}},^tileSize^:32,^gridWidth^:5,^tileCount^:30,^gridHeight^:6,^description^:^n/a^,^symbolStartIdx^:1064}},^max_wrong^:3,^questions^:[{^type^:^trac_nghiem^,^answer^:1,^selects^:[^lua chon 1^,^lua chon 2^,^lua chon 3^,^lua chon n^],^suggest^:^đây là tên của 1 vị tướng^,^question^:^Đây là ai?^},{^type^:^trac_nghiem^,^answer^:0,^selects^:[^Loài Vượn người^,^Từ bùn đất (do Chúa trời tạo ra).^,^Loài khỉ.^,^Từ một bọc trăm trứng.^],^suggest^:^^,^question^:^Theo các nhà khoa học hiện đại, con người có nguồn gốc tổ tiên từ đâu?^},{^type^:^trac_nghiem^,^answer^:1,^selects^:[^Khoảng từ 3 triệu đến 2 triệu năm cách ngày nay.^,^Khoảng từ 6 triệu đến 5 triệu năm cách ngày nay.^,^Khoảng từ 5 triệu đến 4 triệu năm cách ngày nay.^,^Khoảng từ 4 triệu đến 3 triệu năm cách ngày nay.^],^suggest^:^^,^question^:^Vượn người xuất hiện vào khoảng thời gian nào?^},{^type^:^trac_nghiem^,^answer^:2,^selects^:[^Chính quyền đô hộ thực hiện chính sách lấy người Việt trị người Việt^,^Chính sách đồng hóa của chính quyền đô hộ gây tâm lí bất bình trong nhân dân^,^Chính sách áp bức, bóc lột tàn bạo của phong kiến phương Bắc và tinh thần đấu tranh bất khuất không cam chịu làm nô lệ của nhân dân ta^,^Do ảnh hưởng của các phong trào nông dân ở Trung Quốc^],^suggest^:^^,^question^:^Nguyên nhân dẫn đến phong trào đấu tranh của nhân dân ta chống chính quyền đô hộ phương Bắc là^},{^type^:^trac_nghiem^,^answer^:0,^selects^:[^40^,^41^,^42^,^43^],^suggest^:^^,^question^:^Cuộc khởi nghĩa Hai Bà Trưng bùng nổ vào năm^},{^desc^:^gợi ý về hình ảnh hoặc j đấy^,^type^:^xep_hinh^,^image_id^:^22410^},{^desc^:^gợi ý về hình ảnh hoặc j đấy^,^type^:^xep_hinh^,^image_id^:^24570^},{^desc^:^gợi ý về hình ảnh hoặc j đấy^,^type^:^xep_hinh^,^image_id^:^24594^},{^desc^:^hãy tìm địa điểm này trong bảo tàng^,^type^:^scan^,^suggest^:^đây là bức tranh được vẽ bởi ...^,^correct_answer^:^123456^},{^desc^:^hãy tìm địa điểm này trong bảo tàng^,^type^:^scan^,^suggest^:^đây là bức tranh được vẽ bởi ...^,^correct_answer^:^23456789^}],^define_item_map^:[{^effect^:^back_forward 2^,^tileSymbol^:^Ƈ^,^tilesetIdx^:^0^},{^effect^:^forward 2^,^tileSymbol^:^è^,^tilesetIdx^:^0^},{^effect^:^tele 1^,^tileSymbol^:^ӌ^,^tilesetIdx^:^0^},{^effect^:^tele -1^,^tileSymbol^:^ê^,^tilesetIdx^:^0^}]}
      ;//= ioJsonData;//= ioJsonData;
      const initTilemapEditor = () => {
        console.log(^INIT with^, {tileSetImages, tileSize})
        // TODO move this under after parsing url params and get everything from there
        TilemapEditor.init(^tileMapEditor^,{ // The id of the element that will become the tilemap-editor (must exist in your dom)
          // loads tilemap data which was saved before. undefined will start you with an empty map.
          // Takes a parsed json object with a data struct that tiled-editor can read (an object with maps and tileSets):
          // { maps : {...}, tileSets: {...}}
          tileMapData,//TODO this needs to work without tilemapData (new file)
          // tileSize is used to slice the tileset and give the tilemap the right sized grid
          tileSize,
          // How many tiles is the initial map wide
          mapWidth,
          // How many tiles is the initial map tall
          mapHeight,
          // tileset images [{src (required), description (optional)}]
          tileSetImages,
          // You can write your own custom load image function here and use it for the tileset src. If you dont, the base64 string will be used instead
          tileSetLoaders: {
            fromUrl: {
              name: ^Any url^, // name is required and used for the loader's title in the select menu
              prompt: (setSrc) => { // Pass prompt ot onSelectImage. Prompt lets you do anything without asking the user to select a file
                const fileUrl = window.prompt(^What is the url of the tileset?^, ^https://i.imgur.com/ztwPZOI.png^);
                if(fileUrl !== null) setSrc(fileUrl)
              }
            },
            imgur: {
              name: ^Imgur (host)^,
              onSelectImage: (setSrc, file, base64) => { // In case you want them to give you a file from the fs, you can do this instead of prompt
                uploadImageToImgur(file).then(result=>{
                  console.log(file, base64);
                  console.log(^Uploaded to imgur^, result);
                  setSrc(result.data.link);
                });
              },
            },
          },
          // You can write your own tilemap exporters here. Whatever they return will get added to the export data you get out when you trigger onAppy
          tileMapExporters: {
            // kaboomJs: { // the exporter's key is later used by the onApply option
            //   name: ^Download KaboomJs boilerplate code^, // name of menu entry
            //   description: ^Exports boilerplate js code for KaboomJs^,
            //   transformer: ({flattenedData, maps, tileSets, activeMap, downloadAsTextFile})=> {
            //     const text = kaboomJsExport({flattenedData, maps, tileSets, activeMap});
            //     downloadAsTextFile(text, ^KaboomJsMapData.js^);// you can use this util method to get your text as a file
            //   }
            // },
          },
          tileMapImporters: {
            //similar to the exporters, you can write your own data importer, which will then be added to the file menu
            // tiledImport: {
            //   name: ^Import Tiled json file (TODO)^, // name of menu entry
            //   onSelectFiles: (setData, files) => { // callback that is triggered when file(s) are selected.
            //     const readFile = new FileReader();
            //     readFile.onload = (e) => {
            //       const json = JSON.parse(e.target.result);
            //       // At this point we got the json data from the tiled file. We need to convert it into
            //       // a data struct that tiled-editor can read (an object with maps and tileSets):
            //       // { maps : {...}, tileSets: {...}}
            //       alert(^Not implemented yet... pr welcome ;)^);
            //       return;// TODO tiled json file parser
            //
            //       setData(json); // Finally pass that to the setData function, which will load it into tiled-editor
            //     };
            //     readFile.readAsText(files[0]);
            //   },
            //   acceptFile: ^application/JSON^ // You can control what files are accepted
            // }
          },
          // If passed, a new button gets added to the header, upon being clicked, you can get data from the tilemap editor and trigger events
          onApply: {
            onClick: ({flattenedData, maps, tileSets, activeMap}) => {
              console.log(^onClick, gets the data too^)
              const copyText = document.createElement(^input^);
              document.body.appendChild(copyText);
              copyText.value = kaboomJsExport({flattenedData, maps, tileSets, activeMap});
              copyText.select();
              copyText.setSelectionRange(0, 99999); /* For mobile devices */
              document.execCommand(^copy^);
      
              /* Alert the copied text */
              // alert(^Copied the text: ^ + copyText.value);
              // const kbCode = kaboomJsExport({flattenedData, maps, tileSets, activeMap});
            },
            buttonText: ^Copy Kb to clip^, // controls the apply button's text
          },
        })
      }
      
      if(window.location.href.includes(^?^)) {
        const urlParams = new URLSearchParams(window.location.href.split(^?^)[1]);
        const imgur =  urlParams.get(^imgur^);
        if(imgur){
          getImgurGallery(imgur, data => {
            console.log(^ALBUM^, data.images)
            // const images = data.images //description and link
            tileSetImages = data.images.map(image=> {
              let extractedSourceMatch
              if(image.description && image.description.includes(^tileSize:^)){
                const extractedTileSizeMatch = image.description.match(/tileSize\\:\\s*([0-9]+)/);
                if(extractedTileSizeMatch && extractedTileSizeMatch.length > 1){
                  tileSize = parseInt(extractedTileSizeMatch[1],10)
                  console.info(^set tileSize from description^, tileSize)
                  if(tileSize === 8){
                    mapWidth = 20; // Detect map size for a gameboy room
                    mapHeight = 18;
                  }
                }
                extractedSourceMatch = image.description.match(/source\\:\\s*(.*)/);
              }
              let extractedTilesetName
              if(image.description && image.description.includes(^name:^)){
                extractedTilesetName = image.description.match(/name\\:\\s*(.*)/);
              }
              return {
                src: image.link,
                tileSize,
                name: extractedTilesetName.length > 1 ? extractedTilesetName[1]: ^^,
                description: image.description,
                link: extractedSourceMatch && extractedSourceMatch.length > 1 ? @https://~{extractedSourceMatch[1]}@ : @https://imgur.com/a/~{imgur}@
              }
            })
            initTilemapEditor()
          })
        }
        const gist = urlParams.get(^gist^)
        if(gist){
          getMapFromGist(gist, mapData => {
            tileMapData = mapData;
            initTilemapEditor();
          })
        }
        const tileSizeParam = urlParams.get(^tileSize^);
        if (tileSizeParam) {
          tileSize = parseInt(tileSizeParam, 10)
        }
      } else {
        initTilemapEditor()
      }
    

      `
      return data
    })
    .then(data=>{
      let temp = data.slice(0);
      temp = temp.replaceAll('^', '"');
      temp = temp.replaceAll('~', '$');
      temp = temp.replaceAll('@', '`');
      return temp.slice(0);
    })
    .then(temp=>{
        if (!document.querySelector('.map-script')) {
            console.log(document.querySelector('.map-script'));
            const script = document.createElement('script');
            script.innerHTML = temp.toString();
            script.classList.add('map-script')
            console.log(script);
            document.body.appendChild(script);
        }
    })
    console.log("inited");
  }


  useEffect(()=>{
      console.log("mounted");
// @ts-check
    (function (root, factory) {
        // @ts-ignore
        if (typeof exports === 'object' && typeof exports.nodeName !== 'string') {
            // CommonJS
            factory(exports);
        } else {
            // Browser globals
            // @ts-ignore
            factory((root.TilemapEditor = {}));
        }
    // eslint-disable-next-line no-restricted-globals
    })(typeof self !== 'undefined' ? self : this, function (exports) {
        console.log("js inited");
        // Call once on element to add behavior, toggle on/off isDraggable attr to enable
        const draggable = ({element, onElement = null, isDrag = false, onDrag = null,
                            limitX = false, limitY = false, onRelease = null}) => {
            element.setAttribute("isDraggable", isDrag);
            let isMouseDown = false;
            let mouseX;
            let mouseY;
            let elementX = 0;
            let elementY = 0;
            const onMouseMove = (event) => {
                if (!isMouseDown || element.getAttribute("isDraggable") === "false") return;
                const deltaX = event.clientX - mouseX;
                const deltaY = event.clientY - mouseY;
                // element.style.position = "relative"
                if(!limitX) element.style.left = elementX + deltaX + 'px';
                if(!limitY) element.style.top = elementY + deltaY + 'px';
                console.log("DRAGGING", {deltaX, deltaY, x: elementX + deltaX, y:elementY + deltaY})
                if(onDrag) onDrag({deltaX, deltaY, x: elementX + deltaX, y:elementY + deltaY, mouseX, mouseY});
            }
            const onMouseDown = (event) => {
                if(element.getAttribute("isDraggable") === "false") return;

                mouseX = event.clientX;
                mouseY = event.clientY;
                console.log("MOUSEX", mouseX)
                isMouseDown = true;
            }
            const onMouseUp = () => {
                // @ts-ignore
                if(!element.getAttribute("isDraggable") === "false") return;
                isMouseDown = false;
                elementX = parseInt(element.style.left) || 0;
                elementY = parseInt(element.style.top) || 0;
                if(onRelease) onRelease({x:elementX,y:elementY})
            }
            (onElement || element).addEventListener('pointerdown', onMouseDown);
            document.addEventListener('pointerup', onMouseUp);
            document.addEventListener('pointermove', onMouseMove);
        }
        const drawGrid = (w, h,ctx, step = 16, color='rgba(0,255,217,0.5)') => {
            ctx.strokeStyle = color;
            ctx.lineWidth = 0.5;
            ctx.beginPath();
            for (let x = 0; x < w + 1; x += step) {
                ctx.moveTo(x,  0.5);
                ctx.lineTo(x, h + 0.5);
            }
            for (let y = 0; y < h +1; y += step) {
                ctx.moveTo(0, y + 0.5);
                ctx.lineTo(w, y + 0.5);
            }
            ctx.stroke();
        }
        const toBase64 = file => new Promise((resolve, reject) => {
            const reader = new FileReader();
            reader.readAsDataURL(file);
            reader.onload = () => resolve(reader.result);
            reader.onerror = error => reject(error);
        });
        const decoupleReferenceFromObj = (obj) => JSON.parse(JSON.stringify(obj));
        const getHtml = (width, height) =>{
            return `
        <div id="tilemapjs_root" class="card tilemapjs_root">
            <a id="downloadAnchorElem" style="display:none"></a>
        <div class="tileset_opt_field header">
        <div class="menu file">
                <span> Tệp </span>
                <div class="dropdown" id="fileMenuDropDown">                            
                    <div id="popup2" class="overlay">
                    <div class="popup">
                    <h4>Tilemap editor</h4>
                    <a class="close" href="#">&times;</a>
                    <div class="content"> 
                        <div>Created by Todor Imreorov (blurymind@gmail.com)</div>
                        <br/>
                        <div><a class="button-as-link" href="https://github.com/blurymind/tilemap-editor">Project page (Github)</a></div>
                        <div><a class="button-as-link" href="https://ko-fi.com/blurymind">Donate page (ko-fi)</a></div>
                        <br/>
                        <div>Instructions:</div>
                        <div>right click on map - picks tile</div>
                        <div>mid-click - erases tile</div>
                        <div>left-click adds tile</div> 
                        <div>right-click on tileset - lets you change tile symbol or metadata</div>
                        <div>left-click - selects tile </div>
                    </div>
                    </div>
                    </div>
                </div>
            </div>
            <div>
                <div id="toolButtonsWrapper" class="tool_wrapper">             
                <input id="tool0" type="radio" value="0" name="tool" checked class="hidden"/>
                <label for="tool0" title="paint tiles" data-value="0" class="menu">
                    <div id="flipBrushIndicator">🖌️</div>
                    <div class="dropdown">
                        <div class="item nohover">Brush tool options</div>
                        <div class="item">
                            <label for="toggleFlipX" class="">Flip tile on x</label>
                            <input type="checkbox" id="toggleFlipX" style="display: none"> 
                            <label class="toggleFlipX"></label>
                        </div>
                    </div>
                </label>
                <input id="tool1" type="radio" value="1" name="tool" class="hidden"/>
                <label for="tool1" title="erase tiles" data-value="1">🗑️</label>
                <input id="tool2" type="radio" value="2" name="tool" class="hidden"/> 
                <label for="tool2" title="pan" data-value="2">✋</label>
                <input id="tool3" type="radio" value="3" name="tool" class="hidden"/> 
                <label for="tool3" title="pick tile" data-value="3">🎨</label>
                <input id="tool4" type="radio" value="4" name="tool" class="hidden"/> 
                <label for="tool4" title="random from selected" data-value="4">🎲</label>
                <input id="tool5" type="radio" value="5" name="tool" class="hidden"/> 
                <label for="tool5" title="fill on layer" data-value="5">🌈</label>
                </div>
            </div>

            <div class="tool_wrapper">
                <label id="undoBtn" title="Undo">↩️️</label>
                <label id="redoBtn" title="Redo">🔁️</label>
                <label id="zoomIn" title="Zoom in">🔎️+</label>
                <label id="zoomOut" title="Zoom out">🔎️-</label>
                <label id="zoomLabel">️</label>
            </div>
                
            <div>
                <button class="primary-button" id="confirmBtn">"apply"</button>
            </div>

        </div>
        <div class="card_body">
            <div class="card_left_column">
            <details class="details_container sticky_left" id="tilesetDataDetails" open="true">
            <summary >
                <span  id="mapSelectContainer">
                | <select name="tileSetSelectData" id="tilesetDataSel" class="limited_select"></select>
                <button id="replaceTilesetBtn" title="replace tileset">r</button>
                <input id="tilesetReplaceInput" type="file" style="display: none" />
                <button id="addTilesetBtn" title="add tileset">+</button>
                <input id="tilesetReadInput" type="file" style="display: none" />
                <button id="removeTilesetBtn" title="remove">-</button>
                </span>
            </summary>
            <div>
                <div class="tileset_opt_field">
                    <span>Tile size:</span>
                    <input type="number" id="cropSize" name="crop" placeholder="32" min="1" max="128">
                </div>
                <div class="tileset_opt_field">
                    <span>Tileset loader:</span>
                    <select name="tileSetLoaders" id="tileSetLoadersSel"></select>
                </div>
                <div class="tileset_info" id="tilesetSrcLabel"></div>
                <div class="tileset_info" id="tilesetHomeLink"></div>
                <div class="tileset_info" id="tilesetDescriptionLabel"></div> 
            </div>

            </details>
            <div class="select_container layer sticky_top sticky_left" id="tilesetSelectContainer">
                <span id="setSymbolsVisBtn">👓️</span>

                <select name="tileData" id="tileDataSel">
                    <option value="">Symbols</option>
                </select>
                <button id="addTileTagBtn" title="add">+</button>
                <button id="removeTileTagBtn" title="remove">-</button>
            </div>
            <div class="select_container layer sticky_top2 tileset_opt_field sticky_settings  sticky_left" style="display: none" id="tileFrameSelContainer">
                <select name="tileFrameData" id="tileFrameSel">
    <!--            <option value="anim1">anim1rrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrr</option>-->
            </select>
            <button id="addTileFrameBtn" title="add">+</button>
            <button id="removeTileFrameBtn" title="remove">-</button>
            frames: <input id="tileFrameCount" value="1" type="number" min="1">
            
            <div title="Object parameters" class="menu parameters" id="objectParametersEditor">
                ⚙
                <div class="dropdown">
                    <div class="item nohover">Object parameters</div>
                    <div class="item">
                        coming soon...
    <!--                    <label for="toggleFlipX" class="">Flip tile on x</label>-->
    <!--                    <input type="checkbox" id="toggleFlipX" style="display: none"> -->
    <!--                    <label class="toggleFlipX"></label>-->
                    </div>
                </div>
            ️</div>
            </div>
            
        <div class="tileset-container">
            <div class="tileset-container-selection"></div>
            <canvas id="tilesetCanvas" />
    <!--        <div id="tilesetGridContainer" class="tileset_grid_container"></div>-->
            
        </div>
            </div>
            <div class="card_right-column" style="position:relative" id="canvas_drag_area">
            <div class="canvas_wrapper" id="canvas_wrapper">
            <canvas id="mapCanvas" width="${width}" height="${height}"></canvas>
            <div class="canvas_resizer" resizerdir="y"><input value="1" type="number" min="1" resizerdir="y"><span>-y-</span></div>
            <div class="canvas_resizer vertical" resizerdir="x"><input value="${mapTileWidth}" type="number" min="1" resizerdir="x" disabled><span>-x-</span></div>
            </div>
            </div>
        <div class="card_right-column layers">
        <div id="mapSelectContainer" class="tilemaps_selector">
                <select name="mapsData" id="mapsDataSel"></select>
                <button id="addMapBtn" title="Add tilemap">+</button>
                <button id="removeMapBtn" title="Remove tilemap">-</button>        
                <button id="duplicateMapBtn" title="Duplicate tilemap">📑</button>     
                <a class="button d-none" href="#popup1">🎚️</a>
                <div id="popup1" class="overlay">
                <div class="popup">
                <h4>TileMap settings</h4>
                <a class="close" href="#">&times;</a>
                <div class="content">
                    <span class="flex">Width: </span><input id="canvasWidthInp" value="1" type="number" min="1">
                    <span class="flex">Height: </span><input id="canvasHeightInp" value="1" type="number" min="1">
                    <br/><br/>
                    <span class="flex">Grid tile size: </span><input type="number" id="gridCropSize" name="crop" placeholder="32" min="1" max="128">
                    <span class="flex">Grid color: </span><input type="color" value="#ff0000" id="gridColorSel">
                    <span class="flex">Show grid above: </span> <input type="checkbox" id="showGrid">
                    <br/><br/>
                    <div class="tileset_opt_field">
                        <button id="renameMapBtn" title="Rename map">Rename</button>
                        <button id="clearCanvasBtn" title="Clear map">Clear</button>
                    </div>
                </div>
                </div>
                </div>
            </div>

            <label class="sticky add_layer">
                <label id="activeLayerLabel" class="menu">
                Editing Layer
                </label>
                <button id="addLayerBtn" title="Add layer">+</button>
            </label>
            <div class="layers" id="layers">
        </div>
        </div>
        </div>
            `
        }
        const getEmptyLayer = (name="layer")=> ({tiles:{}, visible: true, name, animatedTiles: {}, opacity: 1});
        let tilesetImage, canvas, tilesetContainer, tilesetSelection, cropSize,
            // @ts-ignore
            confirmBtn, tilesetGridContainer,
            // @ts-ignore
            layersElement, resizingCanvas, mapTileHeight, mapTileWidth, tileDataSel,tileFrameSel,
            tilesetDataSel, mapsDataSel, objectParametersEditor;

        let TILESET_ELEMENTS = [];
        let IMAGES = [{src:''}];
        let ZOOM = 1;
        let SIZE_OF_CROP = 32;
        let WIDTH = 0;
        let HEIGHT = 0;
        const TOOLS = {
            BRUSH: 0,
            ERASE: 1,
            PAN: 2,
            PICK: 3,
            RAND: 4,
            FILL: 5
        }
        let PREV_ACTIVE_TOOL = 0;
        let ACTIVE_TOOL = 0;
        let ACTIVE_MAP = "";
        let DISPLAY_SYMBOLS = false;
        let SHOW_GRID = false;
        const getEmptyMap = (name="map", mapWidth =20, mapHeight=20, tileSize = 32, gridColor="#00FFFF") =>
            ({layers: [getEmptyLayer("bottom"), getEmptyLayer("middle"), getEmptyLayer("top")], name,
                mapWidth, mapHeight, tileSize, width: mapWidth * SIZE_OF_CROP,height: mapHeight * SIZE_OF_CROP, gridColor });

        const getEmptyTilesetTag = (name, code, tiles ={}) =>({name,code,tiles});

        const getEmptyTileSet = ({
                                    src,
                                    name = "tileset",
                                    gridWidth,
                                    gridHeight,
                                    tileData = {},
                                    symbolStartIdx,
                                    tileSize = SIZE_OF_CROP,
                                    tags = {},
                                    frames = {},
                                    width,
                                    height,
                                    description = "n/a"
                                }) => {
            return { src, name, gridWidth, gridHeight, tileCount: gridWidth * gridHeight, tileData, symbolStartIdx,tileSize, tags, frames, description, width, height}
        }

        // @ts-ignore
        const getSnappedPos = (pos) => (Math.round(pos / (SIZE_OF_CROP)) * (SIZE_OF_CROP));
        let selection = [{}];
        let currentLayer = 0;
        let isMouseDown = false;
        let maps = {};
        let tileSets = {};

        let apiTileSetLoaders = {};
        let selectedTileSetLoader = {};
        let apiTileMapExporters = {};
        let apiTileMapImporters = {};

        let editedEntity

        const getContext = () =>  canvas.getContext('2d');

        const setLayer = (newLayer) => {
            currentLayer = Number(newLayer);

            const oldActivedLayer = document.querySelector('.layer.active');
            if (oldActivedLayer) {
                oldActivedLayer.classList.remove('active');
            }

            document.querySelector(`.layer[tile-layer="${newLayer}"]`)?.classList.add('active');
            document.getElementById("activeLayerLabel").innerHTML = `
                Editing Layer: ${maps[ACTIVE_MAP].layers[newLayer]?.name} 
                <div class="dropdown left">
                    <div class="item nohover">Layer: ${maps[ACTIVE_MAP].layers[newLayer]?.name} </div>
                    <div class="item">
                        <div class="slider-wrapper">
                        <label for="layerOpacitySlider">Opacity</label>
                        <input type="range" min="0" max="1" value="1" id="layerOpacitySlider" step="0.01">
                        <output for="layerOpacitySlider" id="layerOpacitySliderValue">${maps[ACTIVE_MAP].layers[newLayer]?.opacity}</output>
                        </div>
                    </div>
                </div>
            `;
            // @ts-ignore
            document.getElementById("layerOpacitySlider").value = maps[ACTIVE_MAP].layers[newLayer]?.opacity;
            document.getElementById("layerOpacitySlider").addEventListener("change", e =>{
                addToUndoStack();
                // @ts-ignore
                document.getElementById("layerOpacitySliderValue").innerText = e.target.value;
                // @ts-ignore
                maps[ACTIVE_MAP].layers[currentLayer].opacity = Number(e.target.value);
                draw();
                updateLayers();
            })
        }


        const setLayerIsVisible = (layer, override = null) => {
            const layerNumber = Number(layer);
            maps[ACTIVE_MAP].layers[layerNumber].visible = override ?? !maps[ACTIVE_MAP].layers[layerNumber].visible;
            document
                .getElementById(`setLayerVisBtn-${layer}`)
                .innerHTML = maps[ACTIVE_MAP].layers[layerNumber].visible ? "👁️": "👓";
            draw();
        }

        const trashLayer = (layer) => {
            const layerNumber = Number(layer);
            maps[ACTIVE_MAP].layers.splice(layerNumber, 1);
            updateLayers();
            setLayer(maps[ACTIVE_MAP].layers.length - 1);
            draw();
        }

        const addLayer = () => {
            const newLayerName = prompt("Enter layer name", `Layer${maps[ACTIVE_MAP].layers.length + 1}`);
            if(newLayerName !== null) {
                maps[ACTIVE_MAP].layers.push(getEmptyLayer(newLayerName));
                updateLayers();
            }
        }

        const updateLayers = () => {
            layersElement.innerHTML = maps[ACTIVE_MAP].layers.map((layer, index)=>{
                return `
                <div class="layer">
                    <div id="selectLayerBtn-${index}" class="layer select_layer" tile-layer="${index}" title="${layer.name}">${layer.name} ${layer.opacity < 1 ? ` (${layer.opacity})` : ""}</div>
                    <span id="setLayerVisBtn-${index}" vis-layer="${index}"></span>
                    <div id="trashLayerBtn-${index}" trash-layer="${index}" ${maps[ACTIVE_MAP].layers.length > 1 ? "":`disabled="true"`} class="d-none">🗑️</div>
                </div>
                `
            }).reverse().join("\n")

            maps[ACTIVE_MAP].layers.forEach((_,index)=>{
                document.getElementById(`selectLayerBtn-${index}`).addEventListener("click",e=>{
                    // @ts-ignore
                    setLayer(e.target.getAttribute("tile-layer"));
                    addToUndoStack();
                })
                document.getElementById(`setLayerVisBtn-${index}`).addEventListener("click",e=>{
                    // @ts-ignore
                    setLayerIsVisible(e.target.getAttribute("vis-layer"))
                    addToUndoStack();
                })
                document.getElementById(`trashLayerBtn-${index}`).addEventListener("click",e=>{
                    // @ts-ignore
                    trashLayer(e.target.getAttribute("trash-layer"))
                    addToUndoStack();
                })
                setLayerIsVisible(index, true);
            })
            setLayer(currentLayer);
        }

        const getTileData = (x= null,y= null) =>{
            const tilesetTiles = tileSets[tilesetDataSel.value].tileData;
            let data;
            if(x === null && y === null){
                const {x: sx, y: sy} = selection[0];
                return tilesetTiles[`${sx}-${sy}`];
            } else {
                data = tilesetTiles[`${x}-${y}`]
            }
            return data;
        }
        const setTileData = (x = null,y = null,newData, key= "") =>{
            const tilesetTiles = tileSets[tilesetDataSel.value].tileData;
            if(x === null && y === null){
                const {x:sx, y:sy} = selection[0];
                tilesetTiles[`${sx}-${sy}`] = newData;
            }
            if(key !== ""){
                tilesetTiles[`${x}-${y}`][key] = newData;
            }else{
                tilesetTiles[`${x}-${y}`] = newData;
            }
        }

        const setActiveTool = (toolIdx) => {
            ACTIVE_TOOL = toolIdx;
            const actTool = document.getElementById("toolButtonsWrapper").querySelector(`input[id="tool${toolIdx}"]`);
            // @ts-ignore
            if (actTool) actTool.checked = true;
            // @ts-ignore
            document.getElementById("canvas_wrapper").setAttribute("isDraggable", ACTIVE_TOOL === TOOLS.PAN);
            draw();
        }

        let selectionSize = [1,1];
        const updateSelection = () => {
            if(!tileSets[tilesetDataSel.value]) return;
            const selected = selection[0];
            if(!selected) return;
            const {x, y} = selected;
            const {x: endX, y: endY} = selection[selection.length - 1];
            const selWidth = endX - x + 1;
            const selHeight = endY - y + 1;
            selectionSize = [selWidth, selHeight]
            console.log(tileSets[tilesetDataSel.value].tileSize)
            const tileSize = tileSets[tilesetDataSel.value].tileSize;
            tilesetSelection.style.left = `${x * tileSize * ZOOM}px`;
            tilesetSelection.style.top = `${y * tileSize * ZOOM}px`;
            tilesetSelection.style.width = `${selWidth * tileSize * ZOOM}px`;
            tilesetSelection.style.height = `${selHeight * tileSize * ZOOM}px`;

            // Autoselect tool upon selecting a tile
            if(![TOOLS.BRUSH, TOOLS.RAND, TOOLS.FILL].includes(ACTIVE_TOOL)) setActiveTool(TOOLS.BRUSH);

            // show/hide param editor
        if(tileDataSel.value === "frames" && editedEntity) objectParametersEditor.classList.add('entity');
        else objectParametersEditor.classList.remove('entity');
        }

        const randomLetters = new Array(10680).fill(1).map((_, i) => String.fromCharCode(165 + i));

        const shouldHideSymbols = () => SIZE_OF_CROP < 10 && ZOOM < 2;
        const updateTilesetGridContainer = () =>{
            const viewMode = tileDataSel.value;
            const tilesetData = tileSets[tilesetDataSel.value];
            if(!tilesetData) return;

            const {tileCount, gridWidth, tileData, tags} = tilesetData;
            console.log("COUNT", tileCount)
            const hideSymbols = !DISPLAY_SYMBOLS || shouldHideSymbols();
            const canvas = document.getElementById("tilesetCanvas");
            const img = TILESET_ELEMENTS[tilesetDataSel.value];
            // @ts-ignore
            canvas.width = img.width * ZOOM;
            // @ts-ignore
            canvas.height = img.height * ZOOM;
            // @ts-ignore
            const ctx = canvas.getContext('2d');
            if (ZOOM !== 1){
                ctx.webkitImageSmoothingEnabled = false;
                ctx.mozImageSmoothingEnabled = false;
                ctx.msImageSmoothingEnabled = false;
                ctx.imageSmoothingEnabled = false;
            }
            // @ts-ignore
            ctx.drawImage(img,0,0,canvas.width ,canvas.height);
            // @ts-ignore
            console.log("WIDTH EXCEEDS?", canvas.width % SIZE_OF_CROP)
            // @ts-ignore
            const tileSizeSeemsIncorrect = canvas.width % SIZE_OF_CROP !== 0;
            drawGrid(ctx.canvas.width, ctx.canvas.height, ctx,SIZE_OF_CROP * ZOOM, tileSizeSeemsIncorrect ? "red":"cyan");
            // @ts-ignore
            Array.from({length: tileCount}, (x, i) => i).map(tile=>{
                if (viewMode === "frames") {
                    const frameData = getCurrentFrames();
                    if(!frameData || Object.keys(frameData).length === 0) return;

                    const {width, height, start, tiles,frameCount} = frameData;
                    selection = [...tiles];
                    ctx.lineWidth = 0.5;
                    ctx.strokeStyle = "red";
                    ctx.strokeRect(SIZE_OF_CROP * ZOOM * (start.x + width), SIZE_OF_CROP * ZOOM * start.y, SIZE_OF_CROP * ZOOM * (width * (frameCount - 1)), SIZE_OF_CROP * ZOOM * height);
                } else if (!hideSymbols) {
                    const x = tile % gridWidth;
                    const y = Math.floor(tile / gridWidth);
                    const tileKey = `${x}-${y}`;
                    const innerTile = viewMode === "" ?
                        tileData[tileKey]?.tileSymbol :
                        viewMode === "frames" ? tile :tags[viewMode]?.tiles[tileKey]?.mark || "-";

                    ctx.fillStyle = 'white';
                    ctx.font = '11px arial';
                    ctx.shadowColor="black";
                    ctx.shadowBlur=4;
                    ctx.lineWidth=2;
                    const posX = (x * SIZE_OF_CROP * ZOOM) + ((SIZE_OF_CROP * ZOOM) / 3);
                    const posY = (y * SIZE_OF_CROP * ZOOM) + ((SIZE_OF_CROP * ZOOM) / 2);
                    ctx.fillText(innerTile,posX,posY);
                }
            })
        }

        let tileSelectStart = null;
        const getSelectedTile = (event) => {
            const { x, y } = event.target.getBoundingClientRect();
            const tileSize = tileSets[tilesetDataSel.value].tileSize * ZOOM;
            const tx = Math.floor(Math.max(event.clientX - x, 0) / tileSize);
            const ty = Math.floor(Math.max(event.clientY - y, 0) / tileSize);
            // add start tile, add end tile, add all tiles inbetween
            const newSelection = [];
            if (tileSelectStart !== null){
                for (let ix = tileSelectStart.x; ix < tx + 1; ix++) {
                    for (let iy = tileSelectStart.y; iy < ty + 1; iy++) {
                        const data = getTileData(ix,iy);
                        newSelection.push({...data, x:ix,y:iy})
                    }
                }
            }
            if (newSelection.length > 0) return newSelection;

            const data = getTileData(tx, ty);
            return [{...data, x:tx,y:ty}];
        }

        const draw = (shouldDrawGrid = true) =>{
            const ctx = getContext();
            ctx.clearRect(0, 0, WIDTH, HEIGHT);
            ctx.canvas.width = WIDTH;
            ctx.canvas.height = HEIGHT;
            if(shouldDrawGrid && !SHOW_GRID)drawGrid(WIDTH, HEIGHT, ctx,SIZE_OF_CROP * ZOOM, maps[ACTIVE_MAP].gridColor);
            const shouldHideHud = shouldHideSymbols();

            maps[ACTIVE_MAP].layers.forEach((layer) => {
                if(!layer.visible) return;
                ctx.globalAlpha = layer.opacity;
                if (ZOOM !== 1){
                    ctx.webkitImageSmoothingEnabled = false;
                    ctx.mozImageSmoothingEnabled = false;
                    ctx.msImageSmoothingEnabled = false;
                    ctx.imageSmoothingEnabled = false;
                }
                //static tiles on this layer
                Object.keys(layer.tiles).forEach((key) => {
                    const [positionX, positionY] = key.split('-').map(Number);
                    const {x, y, tilesetIdx, isFlippedX} = layer.tiles[key];
                    const tileSize = tileSets[tilesetIdx]?.tileSize || SIZE_OF_CROP;

                    if(!(tilesetIdx in TILESET_ELEMENTS)) { //texture not found
                        ctx.fillStyle = 'red';
                        ctx.fillRect(positionX * SIZE_OF_CROP * ZOOM, positionY * SIZE_OF_CROP * ZOOM, SIZE_OF_CROP * ZOOM, SIZE_OF_CROP * ZOOM);
                        return;
                    }
                    if(isFlippedX){
                        ctx.save();//Special canvas crap to flip a slice, cause drawImage cant do it
                        ctx.translate(ctx.canvas.width, 0);
                        ctx.scale(-1, 1);
                        ctx.drawImage(
                            TILESET_ELEMENTS[tilesetIdx],
                            x * tileSize,
                            y * tileSize,
                            tileSize,
                            tileSize,
                            ctx.canvas.width - (positionX * SIZE_OF_CROP * ZOOM) - SIZE_OF_CROP * ZOOM,
                            positionY * SIZE_OF_CROP * ZOOM,
                            SIZE_OF_CROP * ZOOM,
                            SIZE_OF_CROP * ZOOM
                        );
                        ctx.restore();
                    } else {
                        ctx.drawImage(
                            TILESET_ELEMENTS[tilesetIdx],
                            x * tileSize,
                            y * tileSize,
                            tileSize,
                            tileSize,
                            positionX * SIZE_OF_CROP * ZOOM,
                            positionY * SIZE_OF_CROP * ZOOM,
                            SIZE_OF_CROP * ZOOM,
                            SIZE_OF_CROP * ZOOM
                        );
                    }
                });
                // animated tiles
                Object.keys(layer.animatedTiles || {}).forEach((key) => {
                    const [positionX, positionY] = key.split('-').map(Number);
                    const {start, width, height, frameCount, isFlippedX} = layer.animatedTiles[key];
                    const {x, y, tilesetIdx} = start;
                    const tileSize = tileSets[tilesetIdx]?.tileSize || SIZE_OF_CROP;

                    if(!(tilesetIdx in TILESET_ELEMENTS)) { //texture not found
                        ctx.fillStyle = 'yellow';
                        ctx.fillRect(positionX * SIZE_OF_CROP * ZOOM, positionY * SIZE_OF_CROP * ZOOM, SIZE_OF_CROP  * ZOOM * width, SIZE_OF_CROP  * ZOOM * height);
                        ctx.fillStyle = 'blue';
                        ctx.fillText("X",positionX * SIZE_OF_CROP * ZOOM + 5,positionY * SIZE_OF_CROP  * ZOOM + 10);
                        return;
                    }
                    const frameIndex = tileDataSel.value === "frames" || frameCount === 1 ? Math.round(Date.now()/120) % frameCount : 1; //30fps

                    if(isFlippedX) {
                        ctx.save();//Special canvas crap to flip a slice, cause drawImage cant do it
                        ctx.translate(ctx.canvas.width, 0);
                        ctx.scale(-1, 1);

                        const positionXFlipped = ctx.canvas.width - (positionX * SIZE_OF_CROP * ZOOM) - SIZE_OF_CROP * ZOOM;
                        if(shouldDrawGrid && !shouldHideHud) {
                            ctx.beginPath();
                            ctx.lineWidth = 1;
                            ctx.strokeStyle = 'rgba(250,240,255, 0.7)';
                            ctx.rect(positionXFlipped, positionY * SIZE_OF_CROP * ZOOM, SIZE_OF_CROP * ZOOM * width, SIZE_OF_CROP * ZOOM * height);
                            ctx.stroke();
                        }
                        ctx.drawImage(
                            TILESET_ELEMENTS[tilesetIdx],
                            x * tileSize + (frameIndex * tileSize * width),
                            y * tileSize,
                            tileSize * width,// src width
                            tileSize * height, // src height
                            positionXFlipped,
                            positionY * SIZE_OF_CROP * ZOOM, //target y
                            SIZE_OF_CROP * ZOOM * width, // target width
                            SIZE_OF_CROP * ZOOM * height // target height
                        );
                        if(shouldDrawGrid && !shouldHideHud) {
                            ctx.fillStyle = 'white';
                            ctx.fillText("🔛",positionXFlipped + 5,positionY * SIZE_OF_CROP * ZOOM + 10);
                        }
                        ctx.restore();
                    }else {
                        if(shouldDrawGrid && !shouldHideHud) {
                            ctx.beginPath();
                            ctx.lineWidth = 1;
                            ctx.strokeStyle = 'rgba(250,240,255, 0.7)';
                            ctx.rect(positionX * SIZE_OF_CROP * ZOOM, positionY * SIZE_OF_CROP * ZOOM, SIZE_OF_CROP * ZOOM * width, SIZE_OF_CROP * ZOOM * height);
                            ctx.stroke();
                        }
                        ctx.drawImage(
                            TILESET_ELEMENTS[tilesetIdx],
                            x * tileSize + (frameIndex * tileSize * width),//src x
                            y * tileSize,//src y
                            tileSize * width,// src width
                            tileSize * height, // src height
                            positionX * SIZE_OF_CROP * ZOOM, //target x
                            positionY * SIZE_OF_CROP * ZOOM, //target y
                            SIZE_OF_CROP * ZOOM * width, // target width
                            SIZE_OF_CROP * ZOOM * height // target height
                        );
                        if(shouldDrawGrid && !shouldHideHud) {
                            ctx.fillStyle = 'white';
                            ctx.fillText("⭕",positionX * SIZE_OF_CROP * ZOOM + 5,positionY * SIZE_OF_CROP * ZOOM + 10);
                        }
                    }
                })
            });
            if(SHOW_GRID)drawGrid(WIDTH, HEIGHT, ctx,SIZE_OF_CROP * ZOOM, maps[ACTIVE_MAP].gridColor);
        }

        const setMouseIsTrue=(e)=> {
            if(e.button === 0) {
                isMouseDown = true;
            }
            else if(e.button === 1){
                PREV_ACTIVE_TOOL = ACTIVE_TOOL;
                setActiveTool(TOOLS.PAN)
            }
        }

        const setMouseIsFalse=(e)=> {
            if(e.button === 0) {
                isMouseDown = false;
            }
            else if(e.button === 1 && ACTIVE_TOOL === TOOLS.PAN){
                setActiveTool(PREV_ACTIVE_TOOL)
            }
        }

        const removeTile=(key) =>{
            delete maps[ACTIVE_MAP].layers[currentLayer].tiles[key];
            if (key in (maps[ACTIVE_MAP].layers[currentLayer].animatedTiles || {})) delete maps[ACTIVE_MAP].layers[currentLayer].animatedTiles[key];
        }

        // @ts-ignore
        const isFlippedOnX = () => document.getElementById("toggleFlipX").checked;
        const addSelectedTiles = (key, tiles) => {
            const [x, y] = key.split("-");
            const tilesPatch = tiles || selection; // tiles is opt override for selection for fancy things like random patch of tiles
            const {x: startX, y: startY} = tilesPatch[0];// add selection override
            const selWidth = selectionSize[0];
            const selHeight = selectionSize[1];
            maps[ACTIVE_MAP].layers[currentLayer].tiles[key] = tilesPatch[0];
            const isFlippedX = isFlippedOnX();
            for (let ix = 0; ix < selWidth; ix++) {
                for (let iy = 0; iy < selHeight; iy++) {
                    const tileX = isFlippedX ? Number(x)-ix : Number(x)+ix;//placed in reverse when flipped on x
                    const coordKey = `${tileX}-${Number(y)+iy}`;
                    maps[ACTIVE_MAP].layers[currentLayer].tiles[coordKey] = {
                        ...tilesPatch
                        .find(tile => tile.x === startX + ix && tile.y === startY + iy),
                        isFlippedX
                    };
                }
            }
        }
        const getCurrentFrames = () => tileSets[tilesetDataSel.value]?.frames[tileFrameSel.value];
        const getSelectedFrameCount = () => getCurrentFrames()?.frameCount || 1;
        const shouldNotAddAnimatedTile = () => (tileDataSel.value !== "frames" && getSelectedFrameCount() !== 1) || Object.keys(tileSets[tilesetDataSel.value]?.frames).length === 0;
        const addTile = (key) => {
            if (shouldNotAddAnimatedTile()) {
                addSelectedTiles(key);
            } else {
                // if animated tile mode and has more than one frames, add/remove to animatedTiles
                if(!maps[ACTIVE_MAP].layers[currentLayer].animatedTiles) maps[ACTIVE_MAP].layers[currentLayer].animatedTiles = {};
                const isFlippedX = isFlippedOnX();
                const [x,y] = key.split("-");
                maps[ACTIVE_MAP].layers[currentLayer].animatedTiles[key] = {
                    ...getCurrentFrames(),
                    isFlippedX, layer: currentLayer,
                    xPos: Number(x) * SIZE_OF_CROP, yPos: Number(y) * SIZE_OF_CROP
                };
            }
        }

        const addRandomTile = (key) =>{
            // TODO add probability for empty
            if (shouldNotAddAnimatedTile()) {
                maps[ACTIVE_MAP].layers[currentLayer].tiles[key] = selection[Math.floor(Math.random()*selection.length)];
            }else {
                // do the same, but add random from frames instead
                const tilesetTiles = tileSets[tilesetDataSel.value].tileData;
                const {frameCount, tiles, width} = getCurrentFrames();
                const randOffset = Math.floor(Math.random()*frameCount);
                const randXOffsetTiles = tiles.map(tile=>tilesetTiles[`${tile.x + randOffset * width}-${tile.y}`]);
                addSelectedTiles(key,randXOffsetTiles);
            }

        }

        const fillEmptyOrSameTiles = (key) => {
            const pickedTile = maps[ACTIVE_MAP].layers[currentLayer].tiles[key];
            // @ts-ignore
            Array.from({length: mapTileWidth * mapTileHeight}, (x, i) => i).map(tile=>{
                const x = tile % mapTileWidth;
                const y = Math.floor(tile / mapTileWidth);
                const coordKey = `${x}-${y}`;
                const filledTile = maps[ACTIVE_MAP].layers[currentLayer].tiles[coordKey];

                if(pickedTile && filledTile && filledTile.x === pickedTile.x && filledTile.y === pickedTile.y){
                    maps[ACTIVE_MAP].layers[currentLayer].tiles[coordKey] = selection[0];// Replace all clicked on tiles with selected
                }
                else if(!pickedTile && !(coordKey in maps[ACTIVE_MAP].layers[currentLayer].tiles)) {
                    maps[ACTIVE_MAP].layers[currentLayer].tiles[coordKey] = selection[0]; // when clicked on empty, replace all empty with selection
                }
            })
        }

        const selectMode = (mode = null) => {
            if (mode !== null) tileDataSel.value = mode;
            document.getElementById("tileFrameSelContainer").style.display = tileDataSel.value ===  "frames" ?
                "flex":"none"
            // tilesetContainer.style.top = tileDataSel.value ===  "frames" ? "45px" : "0";
            updateTilesetGridContainer();
        }
        const getTile =(key, allLayers = false)=> {
            const layers = maps[ACTIVE_MAP].layers;
            editedEntity = undefined;
            const clicked = allLayers ?
                [...layers].reverse().find((layer,index)=> {
                    if(layer.animatedTiles && key in layer.animatedTiles) {
                        setLayer(layers.length - index - 1);
                        editedEntity = layer.animatedTiles[key];
                    }
                    if(key in layer.tiles){
                        setLayer(layers.length - index - 1);
                        return layer.tiles[key]
                    }
                })?.tiles[key] //TODO this doesnt work on animatedTiles
                :
                layers[currentLayer].tiles[key];

            if (clicked && !editedEntity) {
                selection = [clicked];

                console.log("clicked", clicked, "entity data",editedEntity)
                // @ts-ignore
                document.getElementById("toggleFlipX").checked = !!clicked?.isFlippedX;
                // TODO switch to different tileset if its from a different one
                // if(clicked.tilesetIdx !== tilesetDataSel.value) {
                //     tilesetDataSel.value = clicked.tilesetIdx;
                //     reloadTilesets();
                //     updateTilesetGridContainer();
                // }
                selectMode("");
                updateSelection();
                return true;
            } else if (editedEntity){
                console.log("Animated tile found", editedEntity)
                // @ts-ignore
                selection = editedEntity.tiles;
                // @ts-ignore
                document.getElementById("toggleFlipX").checked = editedEntity.isFlippedX;
                // @ts-ignore
                setLayer(editedEntity.layer);
                // @ts-ignore
                tileFrameSel.value = editedEntity.name;
                updateSelection();
                selectMode("frames");
                return true;
            }else {
                return false;
            }
        }

        const toggleTile=(event)=> {
            if(ACTIVE_TOOL === TOOLS.PAN || !maps[ACTIVE_MAP].layers[currentLayer].visible) return;

            const {x,y} = getSelectedTile(event)[0];
            const key = `${x}-${y}`;

            console.log(event.button)
            if (event.shiftKey) {
                removeTile(key);
            } else if (event.ctrlKey || event.button === 2 || ACTIVE_TOOL === TOOLS.PICK) {
                const pickedTile = getTile(key, true);
                if(ACTIVE_TOOL === TOOLS.BRUSH && !pickedTile) setActiveTool(TOOLS.ERASE); //picking empty tile, sets tool to eraser
                else if(ACTIVE_TOOL === TOOLS.FILL || ACTIVE_TOOL === TOOLS.RAND) setActiveTool(TOOLS.BRUSH); //
            } else {
                if(ACTIVE_TOOL === TOOLS.BRUSH){
                    addTile(key);// also works with animated
                } else if(ACTIVE_TOOL === TOOLS.ERASE) {
                    removeTile(key);// also works with animated
                } else if (ACTIVE_TOOL === TOOLS.RAND){
                    addRandomTile(key);
                } else if (ACTIVE_TOOL === TOOLS.FILL){
                    fillEmptyOrSameTiles(key);
                }
            }
            draw();
            addToUndoStack();
        }

        const clearCanvas = () => {
            addToUndoStack();
            maps[ACTIVE_MAP].layers = [getEmptyLayer("bottom"), getEmptyLayer("middle"), getEmptyLayer("top")];
            setLayer(0);
            updateLayers();
            draw();
            addToUndoStack();
        }

        const downloadAsTextFile = (input, fileName = "tilemap-editor.json") =>{
            const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(typeof input === "string" ? input : JSON.stringify(input));
            const dlAnchorElem = document.getElementById('downloadAnchorElem');
            dlAnchorElem.setAttribute("href",     dataStr     );
            dlAnchorElem.setAttribute("download", fileName);
            dlAnchorElem.click();
        }
        const exportJson = () => {
            downloadAsTextFile({tileSets, maps});
        }

        const exportImage = () => {
            draw(false);
            const data = canvas.toDataURL();
            const image = new Image();
            image.src = data;
            image.crossOrigin = "anonymous";
            const w = window.open('');
            w.document.write(image.outerHTML);
            draw();
        }

        const getTilesAnalisis = (ctx, width, height, sizeOfTile) =>{
            const analizedTiles = {};
            let uuid = 0;
            for (let y = 0; y < height; y += sizeOfTile) {
                for (let x = 0; x < width; x += sizeOfTile) {
                    console.log(x, y);
                    const tileData = ctx.getImageData(x, y, sizeOfTile, sizeOfTile);
                    const index = tileData.data.toString();
                    if (analizedTiles[index]) {
                        analizedTiles[index].coords.push({ x: x, y: y });
                        analizedTiles[index].times++;
                    } else {
                        analizedTiles[index] = {
                            uuid: uuid++,
                            coords: [{ x: x, y: y }],
                            times: 1,
                            tileData: tileData
                        };
                    }
                }
            }
            const uniqueTiles = Object.values(analizedTiles).length - 1;
            console.log("TILES:", {analizedTiles, uniqueTiles})
            return {analizedTiles, uniqueTiles};
        }
        const drawAnaliticsReport = () => {
            const prevZoom = ZOOM;
            ZOOM = 1;// needed for correct eval
            updateZoom();
            draw(false);
            const {analizedTiles, uniqueTiles} = getTilesAnalisis(getContext(), WIDTH, HEIGHT, SIZE_OF_CROP);
            const data = canvas.toDataURL();
            const image = new Image();
            image.src = data;
            const ctx = getContext();
            ZOOM = prevZoom;
            updateZoom();
            draw(false);
            Object.values(analizedTiles).map((t) => {
                // Fill the heatmap
                // @ts-ignore
                t.coords.forEach((c, i) => {
                    const fillStyle = `rgba(255, 0, 0, ${(1/t.times) - 0.35})`;
                    ctx.fillStyle = fillStyle;
                    ctx.fillRect(c.x  * ZOOM, c.y  * ZOOM, SIZE_OF_CROP * ZOOM, SIZE_OF_CROP * ZOOM);
                });
            })
            drawGrid(WIDTH, HEIGHT, ctx,SIZE_OF_CROP * ZOOM,'rgba(255,213,0,0.5)')
            ctx.fillStyle = 'white';
            ctx.font = 'bold 17px arial';
            ctx.shadowColor="black";
            ctx.shadowBlur=5;
            ctx.lineWidth=3;
            ctx.fillText(`Unique tiles: ${uniqueTiles}`,4,HEIGHT - 30);
            ctx.fillText(`Map size: ${mapTileWidth}x${mapTileHeight}`,4,HEIGHT - 10);
        }
        const exportUniqueTiles = () => {
            const ctx = getContext();
            const prevZoom = ZOOM;
            ZOOM = 1;// needed for correct eval
            updateZoom();
            draw(false);
            const {analizedTiles} = getTilesAnalisis(getContext(), WIDTH, HEIGHT, SIZE_OF_CROP);
            ctx.clearRect(0, 0, WIDTH, HEIGHT);
            const gridWidth = tilesetImage.width / SIZE_OF_CROP;
            Object.values(analizedTiles).map((t, i) => {
                const positionX = i % gridWidth;
                const positionY = Math.floor(i / gridWidth);
                const tileCanvas = document.createElement("canvas");
                tileCanvas.width = SIZE_OF_CROP;
                tileCanvas.height = SIZE_OF_CROP;
                const tileCtx = tileCanvas.getContext("2d");
                tileCtx.putImageData(t.tileData, 0, 0);
                ctx.drawImage(
                    tileCanvas,
                    0,
                    0,
                    SIZE_OF_CROP,
                    SIZE_OF_CROP,
                    positionX * SIZE_OF_CROP,
                    positionY * SIZE_OF_CROP,
                    SIZE_OF_CROP,
                    SIZE_OF_CROP
                );
            });
            const data = canvas.toDataURL();
            const image = new Image();
            image.src = data;
            image.crossOrigin = "anonymous";
            const w = window.open('');
            w.document.write(image.outerHTML);
            ZOOM = prevZoom;
            updateZoom();
            draw();
        }

        exports.getLayers = ()=> {
            return maps[ACTIVE_MAP].layers;
        }   

        const renameCurrentTileSymbol = ()=>{
                const {x, y, tileSymbol} = selection[0];
                const newSymbol = window.prompt("Enter tile symbol", tileSymbol || "*");
                if(newSymbol !== null) {
                    setTileData(x,y,newSymbol, "tileSymbol");
                    updateSelection();
                    updateTilesetGridContainer();
                    addToUndoStack();
                }
        }

        const getFlattenedData = () => {
            const result = Object.entries(maps).map(([key, map])=>{
                const layers = map.layers;
                const flattenedData = Array(layers.length).fill([]).map(()=>{
                    // @ts-ignore
                    return Array(map.mapHeight).fill([]).map(row=>{
                        // @ts-ignore
                        return Array(map.mapWidth).fill([]).map(column => ({
                            tile: null,
                            tileSymbol: " "// a space is an empty tile
                        }))
                    })
                });
                layers.forEach((layerObj,lrIndex) => {
                    Object.entries(layerObj.tiles).forEach(([key,tile])=>{
                        const [x,y] = key.split("-");
                        if(Number(y) < map.mapHeight && Number(x) < map.mapWidth) {
                            flattenedData[lrIndex][Number(y)][Number(x)] = {tile, tileSymbol: tile.tileSymbol || "*"};
                        }
                    })
                });
                return {map:key,flattenedData};
            });
            return result;
        };
        const getExportData = () => {
            const exportData = {maps, tileSets, flattenedData: getFlattenedData(), activeMap: ACTIVE_MAP, downloadAsTextFile};
            console.log("Exported ", exportData);
            return exportData;
        }

        const updateMapSize = (size) =>{
            if(size?.mapWidth && size?.mapWidth > 1){
                mapTileWidth = size?.mapWidth;
                WIDTH = mapTileWidth * SIZE_OF_CROP * ZOOM;
                maps[ACTIVE_MAP].mapWidth = mapTileWidth;
                // @ts-ignore
                document.querySelector(".canvas_resizer[resizerdir='x']").style=`left:${WIDTH}px`;
                // @ts-ignore
                document.querySelector(".canvas_resizer[resizerdir='x'] input").value = String(mapTileWidth);
                // @ts-ignore
                document.getElementById("canvasWidthInp").value  = String(mapTileWidth);
            }
            if(size?.mapHeight && size?.mapHeight > 1){
                mapTileHeight = size?.mapHeight;
                HEIGHT = mapTileHeight * SIZE_OF_CROP * ZOOM;
                maps[ACTIVE_MAP].mapHeight = mapTileHeight;
                // @ts-ignore
                document.querySelector(".canvas_resizer[resizerdir='y']").style=`top:${HEIGHT}px`;
                // @ts-ignore
                document.querySelector(".canvas_resizer[resizerdir='y'] input").value = String(mapTileHeight);
                // @ts-ignore
                document.getElementById("canvasHeightInp").value  = String(mapTileHeight);
            }
            draw();
        }

        const setActiveMap =(id) =>{
            ACTIVE_MAP = id;
            // @ts-ignore
            document.getElementById("gridColorSel").value = maps[ACTIVE_MAP].gridColor || "#00FFFF";
            draw();
            updateMapSize({mapWidth: maps[ACTIVE_MAP].mapWidth, mapHeight: maps[ACTIVE_MAP].mapHeight})
            updateLayers();
        }


        let undoStepPosition = -1;
        let undoStack = [];
        const clearUndoStack = () => {
            undoStack = [];
            undoStepPosition = -1;
        }
        const addToUndoStack = () => {
            if(Object.keys(tileSets).length === 0 || Object.keys(maps).length === 0) return;
            const oldState = undoStack.length > 0 ? JSON.stringify(
                {
                    maps: undoStack[undoStepPosition].maps,
                    tileSets: undoStack[undoStepPosition].tileSets,
                    currentLayer:undoStack[undoStepPosition].currentLayer,
                    ACTIVE_MAP:undoStack[undoStepPosition].ACTIVE_MAP,
                    IMAGES:undoStack[undoStepPosition].IMAGES
                }) : undefined;
            const newState = JSON.stringify({maps,tileSets,currentLayer,ACTIVE_MAP,IMAGES});
            if (newState === oldState) return; // prevent updating when no changes are present in the data!

            undoStepPosition += 1;
            undoStack.length = undoStepPosition;
            undoStack.push(JSON.parse(JSON.stringify({maps,tileSets, currentLayer, ACTIVE_MAP, IMAGES, undoStepPosition})));
            // console.log("undo stack updated", undoStack, undoStepPosition)
        }
        const restoreFromUndoStackData = () => {
            maps = decoupleReferenceFromObj(undoStack[undoStepPosition].maps);
            const undoTileSets = decoupleReferenceFromObj(undoStack[undoStepPosition].tileSets);
            const undoIMAGES = decoupleReferenceFromObj(undoStack[undoStepPosition].IMAGES);
            if(JSON.stringify(IMAGES) !== JSON.stringify(undoIMAGES)){ // images needs to happen before tilesets
                IMAGES = undoIMAGES;
                reloadTilesets();
            }
            if(JSON.stringify(undoTileSets) !== JSON.stringify(tileSets)) { // done to prevent the below, which is expensive
                tileSets = undoTileSets;
                updateTilesetGridContainer();
            }
            tileSets = undoTileSets;
            updateTilesetDataList();

            const undoLayer = decoupleReferenceFromObj(undoStack[undoStepPosition].currentLayer);
            const undoActiveMap = decoupleReferenceFromObj(undoStack[undoStepPosition].ACTIVE_MAP);
            if(undoActiveMap !== ACTIVE_MAP){
                setActiveMap(undoActiveMap)
                updateMaps();
            }
            updateLayers(); // needs to happen after active map is set and maps are updated
            setLayer(undoLayer);
            draw();
        }
        const undo = () => {
            if (undoStepPosition === 0) return;
            undoStepPosition -= 1;
            restoreFromUndoStackData();
        }
        const redo = () => {
            if (undoStepPosition === undoStack.length - 1) return;
            undoStepPosition += 1;
            restoreFromUndoStackData();
        }
        const zoomLevels = [0.25, 0.5, 1, 2, 3, 4];
        let zoomIndex = 1
        const updateZoom = () => {
            tilesetImage.style = `transform: scale(${ZOOM});transform-origin: left top;image-rendering: auto;image-rendering: crisp-edges;image-rendering: pixelated;`;
            tilesetContainer.style.width = `${tilesetImage.width * ZOOM}px`;
            tilesetContainer.style.height = `${tilesetImage.height * ZOOM}px`;
            document.getElementById("zoomLabel").innerText = `${ZOOM}x`;
            updateTilesetGridContainer();
            updateSelection();
            updateMapSize({mapWidth: mapTileWidth, mapHeight: mapTileHeight});
            WIDTH = mapTileWidth * SIZE_OF_CROP * ZOOM;// needed when setting zoom?
            HEIGHT = mapTileHeight * SIZE_OF_CROP * ZOOM;
            zoomIndex = zoomLevels.indexOf(ZOOM) === -1 ? 0: zoomLevels.indexOf(ZOOM);
        }
        const zoomIn = () => {
            if(zoomIndex >= zoomLevels.length - 1) return;
            zoomIndex += 1;
            ZOOM = zoomLevels[zoomIndex];
            updateZoom();
        }
        const zoomOut = () => {
            if(zoomIndex === 0) return;
            zoomIndex -= 1;
            ZOOM = zoomLevels[zoomIndex];
            updateZoom();
        }

        const toggleSymbolsVisible = (override=null) => {
            if(override === null) DISPLAY_SYMBOLS = !DISPLAY_SYMBOLS;
            document.getElementById("setSymbolsVisBtn").innerHTML = DISPLAY_SYMBOLS ? "👁️": "👓";
            updateTilesetGridContainer();
        }

        const updateTilesetDataList = (populateFrames = false) => {
            const populateWithOptions = (selectEl, options, newContent)=>{
                if(!options) return;
                const value = selectEl.value + "";
                selectEl.innerHTML = newContent;
                Object.keys(options).forEach(opt=>{
                    const newOption = document.createElement("option");
                    newOption.innerText = opt;
                    newOption.value = opt;
                    selectEl.appendChild(newOption)
                })
                if (value in options || (["","frames"].includes(value) && !populateFrames)) selectEl.value = value;
            }

            if (!populateFrames) populateWithOptions(tileDataSel, tileSets[tilesetDataSel.value]?.tags, `<option value="">Vật liệu (${tileSets[tilesetDataSel.value]?.tileCount || "?"})</option><option value="frames" class='d-none'>Objects</option>`);
            else populateWithOptions(tileFrameSel, tileSets[tilesetDataSel.value]?.frames, '');

            // @ts-ignore
            document.getElementById("tileFrameCount").value = getCurrentFrames()?.frameCount || 1;
        }

        const reevaluateTilesetsData = () =>{
            let symbolStartIdx = 0;
            Object.entries(tileSets).forEach(([key,old])=>{
                const tileData = {};
                console.log("OLD DATA",old)
                const tileSize = old.tileSize || SIZE_OF_CROP;
                const gridWidth = Math.ceil(old.width / tileSize);
                const gridHeight = Math.ceil(old.height / tileSize);
                const tileCount = gridWidth * gridHeight;

                // @ts-ignore
                Array.from({length: tileCount}, (x, i) => i).map(tile=>{
                    const x = tile % gridWidth;
                    const y = Math.floor(tile / gridWidth);
                    const oldTileData = old?.[`${x}-${y}`]?.tileData;
                    const tileSymbol = randomLetters[Math.floor(symbolStartIdx + tile)];
                    tileData[`${x}-${y}`] = {
                        ...oldTileData, x, y, tilesetIdx: key, tileSymbol
                    }
                    tileSets[key] = {...old, tileSize, gridWidth, gridHeight, tileCount, symbolStartIdx, tileData};
                })
                // @ts-ignore
                if(key === 0){
                    console.log({gridWidth,gridHeight,tileCount, tileSize})
                }
                symbolStartIdx += tileCount;

            })
            console.log("UPDATED TSETS", tileSets)
        }
        const setCropSize = (newSize) => {
            if(newSize === SIZE_OF_CROP && cropSize.value === newSize) return;
            tileSets[tilesetDataSel.value].tileSize = newSize;
            IMAGES.forEach((ts,idx)=> {
                if (ts.src === tilesetImage.src) IMAGES[idx].tileSize = newSize;
            });
            SIZE_OF_CROP = newSize;
            cropSize.value = SIZE_OF_CROP;
            // @ts-ignore
            document.getElementById("gridCropSize").value = SIZE_OF_CROP;
            console.log("NEW SIZE", tilesetDataSel.value,tileSets[tilesetDataSel.value], newSize,ACTIVE_MAP, maps)
            updateZoom()
            updateTilesetGridContainer();
            console.log(tileSets, IMAGES)
            reevaluateTilesetsData()
            updateTilesetDataList()
            draw();
        }

        // Note: only call this when tileset images have changed
        const reloadTilesets = () =>{
            TILESET_ELEMENTS = [];
            tilesetDataSel.innerHTML = "";
            // Use to prevent old data from erasure
            const oldTilesets = {...tileSets};
            tileSets = {};
            // @ts-ignore
            let symbolStartIdx = 0;
            // Generate tileset data for each of the loaded images
            IMAGES.forEach((tsImage, idx)=>{
                const newOpt = document.createElement("option");
                newOpt.innerText = tsImage.name || `tileset ${idx}`;
                // @ts-ignore
                newOpt.value = idx;
                tilesetDataSel.appendChild(newOpt);
                const tilesetImgElement = document.createElement("img");
                tilesetImgElement.src = tsImage.src;
                tilesetImgElement.crossOrigin = "Anonymous";
                TILESET_ELEMENTS.push(tilesetImgElement);
            })

            Promise.all(Array.from(TILESET_ELEMENTS).filter(img => !img.complete)
                .map(img => new Promise(resolve => { img.onload = img.onerror = resolve; })))
                .then(() => {
                    console.log("TILESET ELEMENTS", TILESET_ELEMENTS)
                    TILESET_ELEMENTS.forEach((tsImage,idx)  => {
                        const tileSize = tsImage.tileSize || SIZE_OF_CROP;
                        tileSets[idx] = getEmptyTileSet(
                            // @ts-ignore
                            {
                                tags: oldTilesets[idx]?.tags, frames: oldTilesets[idx]?.frames, tileSize,
                                src: tsImage.src, name: `tileset ${idx}`, width: tsImage.width, height: tsImage.height
                            }
                        );
                    })
                    console.log("POPULATED", tileSets)
                    reevaluateTilesetsData();
                    tilesetImage.src = TILESET_ELEMENTS[0].src;
                    tilesetImage.crossOrigin = "Anonymous";
                    updateSelection();
                    updateTilesetGridContainer();
                });
            // finally current tileset loaded
            tilesetImage.addEventListener('load', () => {
                draw();
                updateLayers();
                selection = [getTileData(0, 0)];
                updateSelection();
                updateTilesetDataList();
                updateTilesetDataList(true);
                updateTilesetGridContainer();
                document.getElementById("tilesetSrcLabel").innerHTML = `src: <a href="${tilesetImage.src}">${tilesetImage.src}</a>`;
                document.getElementById("tilesetSrcLabel").title = tilesetImage.src;
                const tilesetExtraInfo = IMAGES.find(ts=>ts.src === tilesetImage.src);

                console.log("CHANGED TILESET", tilesetExtraInfo, IMAGES)

                if(tilesetExtraInfo) {
                    if (tilesetExtraInfo.link) {
                        document.getElementById("tilesetHomeLink").innerHTML = `link: <a href="${tilesetExtraInfo.link}">${tilesetExtraInfo.link}</a> `;
                        document.getElementById("tilesetHomeLink").title = tilesetExtraInfo.link;
                    } else {
                        document.getElementById("tilesetHomeLink").innerHTML = "";
                    }
                    if (tilesetExtraInfo.description) {
                        document.getElementById("tilesetDescriptionLabel").innerText = tilesetExtraInfo.description;
                        document.getElementById("tilesetDescriptionLabel").title = tilesetExtraInfo.description;
                    } else {
                        document.getElementById("tilesetDescriptionLabel").innerText = "";
                    }
                    if (tilesetExtraInfo.tileSize ) {
                        setCropSize(tilesetExtraInfo.tileSize);
                    }
                }
                setCropSize(tileSets[tilesetDataSel.value].tileSize);
                updateZoom();
                // @ts-ignore
                document.querySelector('.canvas_resizer[resizerdir="x"]').style = `left:${WIDTH}px;`;

                if (undoStepPosition === -1) addToUndoStack();//initial undo stack entry
            });
        }

        const updateMaps = ()=>{
            mapsDataSel.innerHTML = "";
            let lastMap = ACTIVE_MAP;
            Object.keys(maps).forEach((key, idx)=>{
                const newOpt = document.createElement("option");
                newOpt.innerText = maps[key].name//`map ${idx}`;
                newOpt.value = key;
                mapsDataSel.appendChild(newOpt);
                if (idx === Object.keys(maps).length - 1) lastMap = key;
            });
            mapsDataSel.value = lastMap;
            setActiveMap(lastMap);
            // @ts-ignore
            document.getElementById("removeMapBtn").disabled = Object.keys(maps).length === 1;
        }
        const loadData = (data) =>{
            try {
                clearUndoStack();
                WIDTH = canvas.width * ZOOM;
                HEIGHT = canvas.height * ZOOM;
                selection = [{}];
                ACTIVE_MAP = data ? Object.keys(data.maps)[0] : "Map_1";
                maps = data ? {...data.maps} : {[ACTIVE_MAP]: getEmptyMap("Map 1", mapTileWidth, mapTileHeight)};
                tileSets = data ? {...data.tileSets} : {};
                reloadTilesets();
                tilesetDataSel.value = "0";
                cropSize.value = data ? tileSets[tilesetDataSel.value]?.tileSize || maps[ACTIVE_MAP].tileSize : SIZE_OF_CROP;
                // @ts-ignore
                document.getElementById("gridCropSize").value = cropSize.value;
                updateMaps();
                updateMapSize({mapWidth: maps[ACTIVE_MAP].mapWidth, mapHeight: maps[ACTIVE_MAP].mapHeight})
            }
            catch(e){
                console.error(e)
            }
        }

        // Create the tilemap-editor in the dom and its events
        exports.init = (
            attachToId,
            {
                tileMapData,
                tileSize,
                mapWidth,
                mapHeight,
                tileSetImages,
                applyButtonText,
                onApply,
                tileSetLoaders,
                tileMapExporters,
                tileMapImporters
            }
        ) => {
            // Attach
            const attachTo = document.getElementById(attachToId);
            if(attachTo === null) return;

            apiTileSetLoaders = tileSetLoaders || {};
            apiTileSetLoaders.base64 = {
                name: "Fs (as base64)",
                // @ts-ignore
                onSelectImage: (setSrc, file, base64) => {
                    setSrc(base64);
                },
            }
            apiTileMapExporters = tileMapExporters;
            apiTileMapExporters.exportAsImage = {
                name: "Xuất bản đồ dưới dạng ảnh",
                transformer: exportImage
            }
            apiTileMapExporters.saveData = {
                name: "Xuất bản đồ dưới dạng JSON",
                transformer: exportJson
            }
            apiTileMapImporters = tileMapImporters;
            apiTileMapImporters.openData = {
                name: "Mở tệp JSON",
                onSelectFiles: (setData, files) => {
                    const readFile = new FileReader();
                    readFile.onload = (e) => {
                        // @ts-ignore
                        const json = JSON.parse(e.target.result);
                        setData(json);
                    };
                    readFile.readAsText(files[0]);
                },
                acceptFile: "application/JSON"
            }

            const importedTilesetImages =  (tileMapData?.tileSets && Object.values(tileMapData?.tileSets)) || tileSetImages;
            IMAGES = importedTilesetImages;
            SIZE_OF_CROP = importedTilesetImages?.[0]?.tileSize || tileSize || 32;//to the best of your ability, predict the init tileSize
            mapTileWidth = mapWidth || 12;
            mapTileHeight = mapHeight || 12;
            const canvasWidth = mapTileWidth * tileSize * ZOOM;
            const canvasHeight = mapTileHeight * tileSize * ZOOM;

            if (SIZE_OF_CROP < 12) ZOOM = 2;// Automatically start with zoom 2 when the tilesize is tiny
            // Attach elements
            attachTo.innerHTML = getHtml(canvasWidth, canvasHeight);
            attachTo.className = "tilemap_editor_root";
            tilesetImage = document.createElement('img');
            cropSize = document.getElementById('cropSize');

            confirmBtn = document.getElementById("confirmBtn");
            if(onApply){
                confirmBtn.innerText = applyButtonText || "Ok";
            } else {
                confirmBtn.style.display = "none";
            }
            canvas = document.getElementById('mapCanvas');
            tilesetContainer = document.querySelector('.tileset-container');
            tilesetSelection = document.querySelector('.tileset-container-selection');
            tilesetGridContainer = document.getElementById("tilesetGridContainer");
            layersElement = document.getElementById("layers");
            objectParametersEditor = document.getElementById("objectParametersEditor");

            tilesetContainer.addEventListener("contextmenu", e => {
                e.preventDefault();
            });

            tilesetContainer.addEventListener('pointerdown', (e) => {
                tileSelectStart = getSelectedTile(e)[0];
            });
            tilesetContainer.addEventListener('pointermove', (e) => {
                if(tileSelectStart !== null){
                    selection = getSelectedTile(e);
                    updateSelection();
                }
            });

            const setFramesToSelection = (animName) =>{
                if(animName === "" || typeof animName !== "string") return;
                tileSets[tilesetDataSel.value].frames[animName] = {
                    ...(tileSets[tilesetDataSel.value].frames[animName]||{}),
                    width: selectionSize[0], height:selectionSize[1], start: selection[0], tiles: selection,
                    name: animName,
                    //To be set when placing tile
                    layer: undefined, isFlippedX: false, xPos: 0, yPos: 0//TODO free position
                }
            }
            tilesetContainer.addEventListener('pointerup', (e) => {
                setTimeout(()=>{
                    // @ts-ignore
                    document.getElementById("tilesetDataDetails").open = false;
                },100);

                selection = getSelectedTile(e);
                updateSelection();
                selection = getSelectedTile(e);
                tileSelectStart = null;

                const viewMode = tileDataSel.value;
                // @ts-ignore
                if(viewMode === "" && e.button === 2){
                    renameCurrentTileSymbol();
                    return;
                }
                // @ts-ignore
                if (e.button === 0) {
                    if(viewMode !== "" && viewMode !== "frames"){
                        selection.forEach(selected=>{
                            addToUndoStack();
                            const {x, y} = selected;
                            const tileKey = `${x}-${y}`;
                            const tagTiles = tileSets[tilesetDataSel.value]?.tags[viewMode]?.tiles;
                            if (tagTiles){
                                if(tileKey in tagTiles) {
                                    delete tagTiles[tileKey]
                                }else {
                                    tagTiles[tileKey] = { mark: "O"};
                                }
                            }
                        });
                    } else if (viewMode === "frames") {
                        setFramesToSelection(tileFrameSel.value);
                    }
                    updateTilesetGridContainer();
                }
            });
            // @ts-ignore
            tilesetContainer.addEventListener('dblclick', (e) => {
                const viewMode = tileDataSel.value;
                if(viewMode === "") {
                    renameCurrentTileSymbol();
                }
            });
            document.getElementById("addLayerBtn").addEventListener("click",()=>{
                addToUndoStack();
                addLayer();
            });
            // Maps DATA callbacks
            mapsDataSel = document.getElementById("mapsDataSel");
            mapsDataSel.addEventListener("change", e=>{
                addToUndoStack();
                // @ts-ignore
                setActiveMap(e.target.value);
                addToUndoStack();
            })
            document.getElementById("addMapBtn").addEventListener("click",()=>{
                const suggestMapName = `Map ${Object.keys(maps).length + 1}`;
                const result = window.prompt("Enter new map key...", suggestMapName);
                if(result !== null) {
                    addToUndoStack();
                    // @ts-ignore
                    const newMapKey = result.trim().replaceAll(" ","_") || suggestMapName;
                    if (newMapKey in maps){
                        alert("A map with this key already exists.")
                        return
                    }
                    maps[newMapKey] = getEmptyMap(result.trim());
                    addToUndoStack();
                    updateMaps();
                }
            })
            document.getElementById("duplicateMapBtn").addEventListener("click",()=>{
                const makeNewKey = (key) => {
                    const suggestedNew = `${key}_copy`;
                    if (suggestedNew in maps){
                        return makeNewKey(suggestedNew)
                    }
                    return suggestedNew;
                }
                addToUndoStack();
                const newMapKey = makeNewKey(ACTIVE_MAP);
                maps[newMapKey] = {...JSON.parse(JSON.stringify(maps[ACTIVE_MAP])), name: newMapKey};// todo prompt to ask for name
                updateMaps();
                addToUndoStack();
            })
            document.getElementById("removeMapBtn").addEventListener("click",()=>{
                addToUndoStack();
                delete maps[ACTIVE_MAP];
                setActiveMap(Object.keys(maps)[0])
                updateMaps();
                addToUndoStack();
            })
            // Tileset DATA Callbacks //tileDataSel
            tileDataSel = document.getElementById("tileDataSel");
            tileDataSel.addEventListener("change",()=>{
                selectMode();
            })
            document.getElementById("addTileTagBtn").addEventListener("click",()=>{
                const result = window.prompt("Name your tag", "solid()");
                if(result !== null){
                    if (result in tileSets[tilesetDataSel.value].tags) {
                        alert("Tag already exists");
                        return;
                    }
                    tileSets[tilesetDataSel.value].tags[result] = getEmptyTilesetTag(result, result);
                    updateTilesetDataList();
                    addToUndoStack();
                }
            });
            document.getElementById("removeTileTagBtn").addEventListener("click",()=>{
                if (tileDataSel.value && tileDataSel.value in tileSets[tilesetDataSel.value].tags) {
                    delete tileSets[tilesetDataSel.value].tags[tileDataSel.value];
                    updateTilesetDataList();
                    addToUndoStack();
                }
            });
            // Tileset frames
            tileFrameSel = document.getElementById("tileFrameSel");
            // @ts-ignore
            tileFrameSel.addEventListener("change", e =>{
                // @ts-ignore
                document.getElementById("tileFrameCount").value = getCurrentFrames()?.frameCount || 1;
                updateTilesetGridContainer();
            });
            document.getElementById("addTileFrameBtn").addEventListener("click",()=>{
                const result = window.prompt("Name your object", `obj${Object.keys(tileSets[tilesetDataSel.value]?.frames||{}).length}`);
                if(result !== null){
                    if (result in tileSets[tilesetDataSel.value].frames) {
                        alert("Object already exists");
                        return;
                    }
                    // @ts-ignore
                    tileSets[tilesetDataSel.value].frames[result] = {frameCount: Number(document.getElementById("tileFrameCount").value)}
                    setFramesToSelection(result);
                    updateTilesetDataList(true);
                    tileFrameSel.value = result;
                    updateTilesetGridContainer();
                }
            });
            document.getElementById("removeTileFrameBtn").addEventListener("click",()=>{
                if (tileFrameSel.value && tileFrameSel.value in tileSets[tilesetDataSel.value].frames) {
                    delete tileSets[tilesetDataSel.value].frames[tileFrameSel.value];
                    updateTilesetDataList(true);
                    updateTilesetGridContainer();
                }
            });
            document.getElementById("tileFrameCount").addEventListener("change", e=>{
                if(tileFrameSel.value === "") return;
                // @ts-ignore
                getCurrentFrames().frameCount = Number(e.target.value);
                updateTilesetGridContainer();
            })
            // Tileset SELECT callbacks
            tilesetDataSel = document.getElementById("tilesetDataSel");
            tilesetDataSel.addEventListener("change",e=>{
                // @ts-ignore
                tilesetImage.src = TILESET_ELEMENTS[e.target.value].src;
                tilesetImage.crossOrigin = "Anonymous";
                updateTilesetDataList();
            })

            const replaceSelectedTileSet = (src) => {
                addToUndoStack();
                IMAGES[Number(tilesetDataSel.value)].src = src;
                reloadTilesets();
            }
            const addNewTileSet = (src) => {
                addToUndoStack();
                IMAGES.push({src});
                reloadTilesets();
            }
            // replace tileset
            document.getElementById("tilesetReplaceInput").addEventListener("change",e=>{
                // @ts-ignore
                toBase64(e.target.files[0]).then(base64Src=>{
                    if (selectedTileSetLoader.onSelectImage) {
                        // @ts-ignore
                        selectedTileSetLoader.onSelectImage(replaceSelectedTileSet, e.target.files[0], base64Src);
                    }
                })
            })
            document.getElementById("replaceTilesetBtn").addEventListener("click",()=>{
                if (selectedTileSetLoader.onSelectImage) {
                    document.getElementById("tilesetReplaceInput").click();
                }
                if (selectedTileSetLoader.prompt) {
                    selectedTileSetLoader.prompt(replaceSelectedTileSet);
                }
            });
            // add tileset
            document.getElementById("tilesetReadInput").addEventListener("change",e=>{
            // @ts-ignore
            toBase64(e.target.files[0]).then(base64Src=>{
                if (selectedTileSetLoader.onSelectImage) {
                    // @ts-ignore
                    selectedTileSetLoader.onSelectImage(addNewTileSet, e.target.files[0], base64Src)
                }
                })
            })
            // remove tileset
            document.getElementById("addTilesetBtn").addEventListener("click",()=>{
                if (selectedTileSetLoader.onSelectImage) {
                    document.getElementById("tilesetReadInput").click();
                }
                if (selectedTileSetLoader.prompt) {
                    selectedTileSetLoader.prompt(addNewTileSet);
                }
            });
            const tileSetLoadersSel = document.getElementById("tileSetLoadersSel");
            Object.entries(apiTileSetLoaders).forEach(([key,loader])=>{
                const tsLoaderOption = document.createElement("option");
                tsLoaderOption.value = key;
                tsLoaderOption.innerText = loader.name;
                tileSetLoadersSel.appendChild(tsLoaderOption);
            });
            // @ts-ignore
            tileSetLoadersSel.value = "base64";
            // @ts-ignore
            selectedTileSetLoader = apiTileSetLoaders[tileSetLoadersSel.value];
            tileSetLoadersSel.addEventListener("change", e=>{
                // @ts-ignore
                selectedTileSetLoader = apiTileSetLoaders[e.target.value];
            })
            document.getElementById("removeTilesetBtn").addEventListener("click",()=>{
                //Remove current tileset
                if (tilesetDataSel.value !== "0") {
                    addToUndoStack();
                    IMAGES.splice(Number(tilesetDataSel.value),1);
                    reloadTilesets();
                }
            });

            // Canvas callbacks
            canvas.addEventListener('pointerdown', setMouseIsTrue);
            canvas.addEventListener('pointerup', setMouseIsFalse);
            canvas.addEventListener('pointerleave', setMouseIsFalse);
            canvas.addEventListener('pointerdown', toggleTile);
            canvas.addEventListener("contextmenu", e => e.preventDefault());
            draggable({ onElement: canvas, element: document.getElementById("canvas_wrapper")});
            canvas.addEventListener('pointermove', (e) => {
                if (isMouseDown && ACTIVE_TOOL !== 2) toggleTile(e)
            });
            // Canvas Resizer ===================
            document.getElementById("canvasWidthInp").addEventListener("change", e=>{
                // @ts-ignore
                updateMapSize({mapWidth: Number(e.target.value)})
            })
            document.getElementById("canvasHeightInp").addEventListener("change", e=>{
                // @ts-ignore
                updateMapSize({mapHeight: Number(e.target.value)})
            })
            // draggable({
            //     element: document.querySelector(".canvas_resizer[resizerdir='x']"),
            //     onElement: document.querySelector(".canvas_resizer[resizerdir='x'] span"),
            //     isDrag: true, limitY: true,
            //     onRelease: ({x}) => {
            //         const snappedX = getSnappedPos(x);
            //         console.log("SNAPPED GRID", x,snappedX)
            //         updateMapSize({mapWidth: snappedX })
            //     },
            // });

            document.querySelector(".canvas_resizer[resizerdir='y'] input").addEventListener("change", e=>{
                // @ts-ignore
                updateMapSize({mapHeight: Number(e.target.value)})
            })
            document.querySelector(".canvas_resizer[resizerdir='x'] input").addEventListener("change", e=>{
                // @ts-ignore
                updateMapSize({mapWidth: Number(e.target.value) })
            })
            document.getElementById("toolButtonsWrapper").addEventListener("click",e=>{
                // @ts-ignore
                console.log("ACTIVE_TOOL", e.target.value)
                // @ts-ignore
                if(e.target.getAttribute("name") === "tool") setActiveTool(Number(e.target.value));
            })
            document.getElementById("gridCropSize").addEventListener('change', e=>{
                // @ts-ignore
                setCropSize(Number(e.target.value));
            })
            cropSize.addEventListener('change', e=>{
                // @ts-ignore
                setCropSize(Number(e.target.value));
            })

            document.getElementById("clearCanvasBtn").addEventListener('click', clearCanvas);
            if(onApply){
                confirmBtn.addEventListener('click', () => onApply.onClick(getExportData()));
            }

            document.getElementById("renameMapBtn").addEventListener("click",()=>{
                const newName = window.prompt("Change map name:", maps[ACTIVE_MAP].name || "Map");
                if(newName !== null && maps[ACTIVE_MAP].name !== newName){
                    if(Object.values(maps).map(map=>map.name).includes(newName)){
                        alert(`${newName} already exists`);
                        return
                    }
                    maps[ACTIVE_MAP].name = newName;
                    updateMaps();
                }
            })

            const fileMenuDropDown = document.getElementById("fileMenuDropDown");
            const makeMenuItem = (name, value, description) =>{
                const menuItem = document.createElement("span");
                menuItem.className = "item";
                menuItem.innerText = name;
                menuItem.title = description || name;
                // @ts-ignore
                menuItem.value = value;
                fileMenuDropDown.appendChild(menuItem);
                return menuItem;
            }
            Object.entries(tileMapExporters).forEach(([key, exporter])=>{
                makeMenuItem(exporter.name, key,exporter.description).onclick = () => {
                    exporter.transformer(getExportData());
                }
            })
            Object.entries(apiTileMapImporters).forEach(([key, importer])=>{
                makeMenuItem(importer.name, key,importer.description).onclick = () => {
                    if(importer.onSelectFiles) {
                        const input = document.createElement("input");
                        input.type = "file";
                        input.id = `importerInput-${key}`;
                        if(importer.acceptFile) input.accept = importer.acceptFile;
                        input.style.display = "none";
                        input.addEventListener("change",e=> {
                            // @ts-ignore
                            importer.onSelectFiles(loadData, e.target.files);
                        })
                        input.click();
                    }
                }
            })
            document.getElementById("toggleFlipX").addEventListener("change",(e)=>{
                // @ts-ignore
                document.getElementById("flipBrushIndicator").style.transform = e.target.checked ? "scale(-1, 1)": "scale(1, 1)"
            })
            document.addEventListener('keypress', e =>{
                if(e.ctrlKey){
                    if(e.code === "KeyZ") undo();
                    if(e.code === "KeyY") redo();
                }
            })
            document.getElementById("gridColorSel").addEventListener("change", e=>{
                // @ts-ignore
                console.log("grid col",e.target.value)
                // @ts-ignore
                maps[ACTIVE_MAP].gridColor = e.target.value;
                draw();
            })
            document.getElementById("showGrid").addEventListener("change", e => {
                // @ts-ignore
                SHOW_GRID = e.target.checked;
                draw();
            })

            document.getElementById("undoBtn").addEventListener("click", undo);
            document.getElementById("redoBtn").addEventListener("click", redo);
            document.getElementById("zoomIn").addEventListener("click", zoomIn);
            document.getElementById("zoomOut").addEventListener("click", zoomOut);
            document.getElementById("setSymbolsVisBtn").addEventListener("click", ()=>toggleSymbolsVisible())
            // Scroll zoom in/out - use wheel instead of scroll event since theres no scrollbar on the map
            canvas.addEventListener('wheel', e=> {
                if (e.deltaY < 0) zoomIn();
                else zoomOut();
            });
            loadData(tileMapData); // loads even if tileMapData is not present

            // Animated tiles when on frames mode
            const animateTiles = () => {
                if (tileDataSel.value === "frames") draw();
                requestAnimationFrame(animateTiles);
            }
            requestAnimationFrame(animateTiles);
        };
        
    });

    init();
  },[])

  return (
    <div>
      <div id="tileMapEditor"></div>
    </div>)
}