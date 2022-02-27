/*******************************************************************************
 * Copyright (c) 2013, 2016 Prepartic and others.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *******************************************************************************/

var questions = new Array();
var choices = new Array();
var answers = new Array();
var response = new Array();
var units = new Array();
var comments = new Array();
var preguntaids = new Array();
var blocks = new Array();
//  Id pregunta: 60 Año de creación de pregunta: 2016
 questions[0]= "1)  La competencia de nombrar y cesar a los ministros corresponde, seg&uacute;n establece la Constituci&oacute;n Espa&ntilde;ola:<br/>";
 choices[0]= new Array();
 choices[0][0] = "Al Presidente del Gobierno.";
 choices[0][1] = "A las Cortes Generales.";
 choices[0][2] = "A los electores.";
 choices[0][3] = "Al Rey, a propuesta del Presidente del Gobierno.";
 answers[0] = 3;
 units[0] = ['1'];
 blocks[0] = ['A1'];
 comments[0] = "Id Pregunta: 60. Constituci&oacute;n de 1978";
 preguntaids[0] = 60


//  Id pregunta: 126 Año de creación de pregunta: 2020
 questions[1]= "2)  Indique cu&aacute;l de las siguientes opciones es correcta de acuerdo con lo dispuesto en el art&iacute;culo 30.3 de la Constituci&oacute;n Espa&ntilde;ola de 1978:<br/>";
 choices[1]= new Array();
 choices[1][0] = "Los espa&ntilde;oles tienen el derecho pero no el deber de defender a Espa&ntilde;a.";
 choices[1][1] = "No podr&aacute; establecerse un servicio civil para el cumplimiento de fines de inter&eacute;s general.";
 choices[1][2] = "Mediante reglamento podr&aacute;n regularse los deberes de los ciudadanos en los casos de grave riesgo, cat&aacute;strofe o calamidad p&uacute;blica.";
 choices[1][3] = "Podr&aacute; establecerse un servicio civil para el cumplimiento de fines de inter&eacute;s general.";
 answers[1] = 3;
 units[1] = ['1'];
 blocks[1] = ['A1'];
 comments[1] = "Id Pregunta: 126. Examen SSTI A1 Xunta de Galicia 2018 Acceso libre";
 preguntaids[1] = 126


//  Id pregunta: 56 Año de creación de pregunta: 2016
 questions[2]= "3)  Espa&ntilde;a se constituye en un Estado social y democr&aacute;tico de Derecho, que propugna como valores superiores de su ordenamiento jur&iacute;dico, seg&uacute;n el art&iacute;culo 1 de la Constituci&oacute;n Espa&ntilde;ola:<br/>";
 choices[2]= new Array();
 choices[2][0] = "La Monarqu&iacute;a Parlamentaria.";
 choices[2][1] = "El Pluralismo Pol&iacute;tico.";
 choices[2][2] = "La soberan&iacute;a nacional.";
 choices[2][3] = "La libertad sindical.";
 answers[2] = 1;
 units[2] = ['1'];
 blocks[2] = ['A1'];
 comments[2] = "Id Pregunta: 56. Examen Gesti&oacute;n de Inform&aacute;tica A2 Universidad de Granada 2012";
 preguntaids[2] = 56


//  Id pregunta: 131 Año de creación de pregunta: 2020
 questions[3]= "4)  Los valores superiores del ordenamiento jur&iacute;dico espa&ntilde;ol, seg&uacute;n la Constituci&oacute;n Espa&ntilde;ola de 1978, son:<br/>";
 choices[3]= new Array();
 choices[3][0] = "la libertad, a igualdad y el pluralismo jur&iacute;dico.";
 choices[3][1] = "la libertad, la igualdad y el Estado social y democr&aacute;tico de derecho.";
 choices[3][2] = "el Estado social y democr&aacute;tico de derecho.";
 choices[3][3] = "la libertad, la justicia, la igualdad y el pluralismo pol&iacute;tico.";
 answers[3] = 3;
 units[3] = ['1'];
 blocks[3] = ['A1'];
 comments[3] = "Id Pregunta: 131. Examen TFSTI A1 Gobierno de Canarias 2018";
 preguntaids[3] = 131


//  Id pregunta: 15 Año de creación de pregunta: 2016
 questions[4]= "5)  &iquest;Qu&eacute; art&iacute;culo de la Constituci&oacute;n Espa&ntilde;ola de 1978 establece que &ldquo;La ley limitar&aacute; el uso de la inform&aacute;tica para garantizar el honor y la intimidad personal y familiar de los ciudadanos y el pleno ejercicio de sus derechos&rdquo;?<br/>";
 choices[4]= new Array();
 choices[4][0] = "Art&iacute;culo 9.";
 choices[4][1] = "Art&iacute;culo 55.";
 choices[4][2] = "Art&iacute;culo 30.";
 choices[4][3] = "Art&iacute;culo 18.";
 answers[4] = 3;
 units[4] = ['1'];
 blocks[4] = ['A1'];
 comments[4] = "Id Pregunta: 15. Constituci&oacute;n de 1978";
 preguntaids[4] = 15


//  Id pregunta: 124 Año de creación de pregunta: 2020
 questions[5]= "6)  El Defensor del Pueblo:<br/>";
 choices[5]= new Array();
 choices[5][0] = "Es el supremo &oacute;rgano consultivo del Gobierno.";
 choices[5][1] = "Puede supervisar la actividad de la Administraci&oacute;n del Estado, pero no la de las Comunidades Aut&oacute;nomas.";
 choices[5][2] = "Puede anular resoluciones e imponer sanciones, siempre que no impliquen privaci&oacute;n de libertad.";
 choices[5][3] = "Tiene como misi&oacute;n la defensa de todos los derechos comprendidos en el T&iacute;tulo I de la Constituci&oacute;n Espa&ntilde;ola, y no s&oacute;lo los susceptibles de recurso de amparo.";
 answers[5] = 3;
 units[5] = ['1'];
 blocks[5] = ['A1'];
 comments[5] = "Id Pregunta: 124. Examen TIC A1 AGE 2018 (extraordinario)";
 preguntaids[5] = 124


//  Id pregunta: 94 Año de creación de pregunta: 2016
 questions[6]= "7)  Seg&uacute;n el Art&iacute;culo 68 de la Constituci&oacute;n, el Congreso se compone de:<br/>";
 choices[6]= new Array();
 choices[6][0] = "Un m&iacute;nimo de 300 Diputados.";
 choices[6][1] = "Un m&aacute;ximo de 350 Diputados.";
 choices[6][2] = "Un m&iacute;nimo de 400 Diputados.";
 choices[6][3] = "Un m&aacute;ximo de 300 Diputados.";
 answers[6] = 0;
 units[6] = ['1'];
 blocks[6] = ['A1'];
 comments[6] = "Id Pregunta: 94. Constituci&oacute;n de 1978";
 preguntaids[6] = 94


//  Id pregunta: 86 Año de creación de pregunta: 2016
 questions[7]= "8)  Seg&uacute;n el art. 18 de la Constituci&oacute;n Espa&ntilde;ola:<br/>";
 choices[7]= new Array();
 choices[7][0] = "La Ley limitar&aacute; el uso de la inform&aacute;tica para garantizar la libertad de opini&oacute;n de las personas.";
 choices[7][1] = "La ley limitar&aacute; el uso de la inform&aacute;tica para garantizar el honor y la intimidad personal y familiar de los ciudadanos y el pleno ejercicio de sus derechos.";
 choices[7][2] = "Se garantiza el secreto inviolable de las comunicaciones postales, telegr&aacute;ficas y telef&oacute;nicas.";
 choices[7][3] = "Se garantiza el derecho al honor, a la intimidad personal y familiar y a la propia imagen, salvo resoluci&oacute;n judicial.";
 answers[7] = 1;
 units[7] = ['1'];
 blocks[7] = ['A1'];
 comments[7] = "Id Pregunta: 86. Examen SSTI A1 Xunta de Galicia 2011";
 preguntaids[7] = 86


//  Id pregunta: 6 Año de creación de pregunta: 2016
 questions[8]= "9)  &iquest;Cu&aacute;l de los siguientes &oacute;rganos, de conformidad con la Constituci&oacute;n Espa&ntilde;ola, no tiene legitimidad para interponer el recurso de inconstitucionalidad?<br/>";
 choices[8]= new Array();
 choices[8][0] = "El Presidente del Senado.";
 choices[8][1] = "El Defensor del Pueblo.";
 choices[8][2] = "Las Asambleas de las Comunidades Aut&oacute;nomas.";
 choices[8][3] = "El Presidente del Gobierno.";
 answers[8] = 0;
 units[8] = ['1'];
 blocks[8] = ['A1'];
 comments[8] = "Id Pregunta: 6. Constituci&oacute;n de 1978";
 preguntaids[8] = 6


