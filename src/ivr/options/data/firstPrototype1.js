module.exports = options = {
    "description": "IVR",
    "states": [
      {
        "name": "Trigger",
        "type": "trigger",
        "transitions": [
          {
            "event": "incomingMessage"
          },
          {
            "next": "main_menu",
            "event": "incomingCall"
          },
          {
            "event": "incomingRequest"
          }
        ],
        "properties": {
          "offset": {
            "x": 250,
            "y": 50
          }
        }
      },
      {
        "name": "main_menu",
        "type": "gather-input-on-call",
        "transitions": [
          {
            "next": "main_menu_key_pressed",
            "event": "keypress"
          },
          {
            "next": "main_menu_speech",
            "event": "speech"
          },
          {
            "next": "main_menu",
            "event": "timeout"
          }
        ],
        "properties": {
          "voice": "man",
          "number_of_digits": 1,
          "speech_timeout": "auto",
          "offset": {
            "x": 290,
            "y": 250
          },
          "loop": 1,
          "finish_on_key": "",
          "say": "Hello, Welcome to Plastik. \n\nPress 1 for our list of products, \n\nPress 2 for our list of offers,\n\npress 3 for information about your account,\n\npress 4 to learn how to become a member,\n\npress 5 to activate your card,\n\npress 0 at anytime to speak to a customer representative,\n\nor press 9 to return to main menu",
          "language": "en-US",
          "stop_gather": false,
          "gather_language": "en",
          "profanity_filter": "true",
          "timeout": 5
        }
      },
      {
        "name": "main_menu_key_pressed",
        "type": "split-based-on",
        "transitions": [
          {
            "next": "main_menu_failed",
            "event": "noMatch"
          },
          {
            "next": "list_of_products",
            "event": "match",
            "conditions": [
              {
                "friendly_name": "1",
                "arguments": [
                  "{{widgets.main_menu.Digits}}"
                ],
                "type": "equal_to",
                "value": "1"
              }
            ]
          },
          {
            "next": "list_of_promos",
            "event": "match",
            "conditions": [
              {
                "friendly_name": "2",
                "arguments": [
                  "{{widgets.main_menu.Digits}}"
                ],
                "type": "equal_to",
                "value": "2"
              }
            ]
          },
          {
            "next": "card_info_gather",
            "event": "match",
            "conditions": [
              {
                "friendly_name": "3",
                "arguments": [
                  "{{widgets.main_menu.Digits}}"
                ],
                "type": "equal_to",
                "value": "3"
              }
            ]
          },
          {
            "next": "become_member_say",
            "event": "match",
            "conditions": [
              {
                "friendly_name": "4",
                "arguments": [
                  "{{widgets.main_menu.Digits}}"
                ],
                "type": "equal_to",
                "value": "4"
              }
            ]
          },
          {
            "next": "activate_card_16digit",
            "event": "match",
            "conditions": [
              {
                "friendly_name": "5",
                "arguments": [
                  "{{widgets.main_menu.Digits}}"
                ],
                "type": "equal_to",
                "value": "5"
              }
            ]
          },
          {
            "next": "main_menu",
            "event": "match",
            "conditions": [
              {
                "friendly_name": "9",
                "arguments": [
                  "{{widgets.main_menu.Digits}}"
                ],
                "type": "equal_to",
                "value": "9"
              }
            ]
          },
          {
            "next": "call_say",
            "event": "match",
            "conditions": [
              {
                "friendly_name": "0",
                "arguments": [
                  "{{widgets.main_menu.Digits}}"
                ],
                "type": "equal_to",
                "value": "0"
              }
            ]
          },
          {
            "next": "function_1",
            "event": "match",
            "conditions": [
              {
                "friendly_name": "6",
                "arguments": [
                  "{{widgets.main_menu.Digits}}"
                ],
                "type": "equal_to",
                "value": "6"
              }
            ]
          }
        ],
        "properties": {
          "input": "{{widgets.main_menu.Digits}}",
          "offset": {
            "x": 100,
            "y": 510
          }
        }
      },
      {
        "name": "main_menu_speech",
        "type": "split-based-on",
        "transitions": [
          {
            "next": "main_menu_failed",
            "event": "noMatch"
          },
          {
            "next": "list_of_products",
            "event": "match",
            "conditions": [
              {
                "friendly_name": "1",
                "arguments": [
                  "{{become}}"
                ],
                "type": "equal_to",
                "value": "1"
              }
            ]
          },
          {
            "next": "list_of_promos",
            "event": "match",
            "conditions": [
              {
                "friendly_name": "2",
                "arguments": [
                  "{{become}}"
                ],
                "type": "equal_to",
                "value": "2"
              }
            ]
          },
          {
            "next": "card_info_gather",
            "event": "match",
            "conditions": [
              {
                "friendly_name": "3",
                "arguments": [
                  "{{become}}"
                ],
                "type": "equal_to",
                "value": "3"
              }
            ]
          },
          {
            "next": "become_member_say",
            "event": "match",
            "conditions": [
              {
                "friendly_name": "4",
                "arguments": [
                  "{{become}}"
                ],
                "type": "equal_to",
                "value": "4"
              }
            ]
          },
          {
            "next": "activate_card_16digit",
            "event": "match",
            "conditions": [
              {
                "friendly_name": "5",
                "arguments": [
                  "{{become}}"
                ],
                "type": "equal_to",
                "value": "5"
              }
            ]
          },
          {
            "next": "main_menu",
            "event": "match",
            "conditions": [
              {
                "friendly_name": "9",
                "arguments": [
                  "{{become}}"
                ],
                "type": "equal_to",
                "value": "9"
              }
            ]
          },
          {
            "next": "call_say",
            "event": "match",
            "conditions": [
              {
                "friendly_name": "0",
                "arguments": [
                  "{{become}}"
                ],
                "type": "equal_to",
                "value": "0"
              }
            ]
          }
        ],
        "properties": {
          "input": "{{become}}",
          "offset": {
            "x": 620,
            "y": 510
          }
        }
      },
      {
        "name": "connect_call_to_support",
        "type": "connect-call-to",
        "transitions": [
          {
            "event": "callCompleted"
          }
        ],
        "properties": {
          "offset": {
            "x": 220,
            "y": 2820
          },
          "caller_id": "{{contact.channel.address}}",
          "noun": "number",
          "to": "15555555678"
        }
      },
      {
        "name": "menu_failed_digit",
        "type": "split-based-on",
        "transitions": [
          {
            "next": "main_menu_failed",
            "event": "noMatch"
          },
          {
            "next": "main_menu",
            "event": "match",
            "conditions": [
              {
                "friendly_name": "1",
                "arguments": [
                  "{{widgets.main_menu_failed.Digits}}"
                ],
                "type": "equal_to",
                "value": "1"
              }
            ]
          },
          {
            "next": "call_say",
            "event": "match",
            "conditions": [
              {
                "friendly_name": "0",
                "arguments": [
                  "{{widgets.main_menu_failed.Digits}}"
                ],
                "type": "equal_to",
                "value": "0"
              }
            ]
          }
        ],
        "properties": {
          "input": "{{widgets.main_menu_failed.Digits}}",
          "offset": {
            "x": -900,
            "y": 390
          }
        }
      },
      {
        "name": "main_menu_failed",
        "type": "gather-input-on-call",
        "transitions": [
          {
            "next": "menu_failed_digit",
            "event": "keypress"
          },
          {
            "next": "menu_failed_voice",
            "event": "speech"
          },
          {
            "next": "main_menu",
            "event": "timeout"
          }
        ],
        "properties": {
          "voice": "man",
          "speech_timeout": "auto",
          "offset": {
            "x": -460,
            "y": 520
          },
          "loop": 1,
          "finish_on_key": "#",
          "say": "Sorry, We were not able to get your answer.\nPress 1 to return to main Menu\nor Press 0 to speak to a customer presentative",
          "language": "en-US",
          "stop_gather": false,
          "gather_language": "en",
          "profanity_filter": "true",
          "timeout": 5
        }
      },
      {
        "name": "menu_failed_voice",
        "type": "split-based-on",
        "transitions": [
          {
            "next": "main_menu_failed",
            "event": "noMatch"
          },
          {
            "next": "main_menu",
            "event": "match",
            "conditions": [
              {
                "friendly_name": "1",
                "arguments": [
                  "{{widgets.main_menu_failed.SpeechResult}}"
                ],
                "type": "equal_to",
                "value": "1"
              }
            ]
          },
          {
            "next": "call_say",
            "event": "match",
            "conditions": [
              {
                "friendly_name": "0",
                "arguments": [
                  "{{widgets.main_menu_failed.SpeechResult}}"
                ],
                "type": "equal_to",
                "value": "0"
              }
            ]
          }
        ],
        "properties": {
          "input": "{{widgets.main_menu_failed.SpeechResult}}",
          "offset": {
            "x": -910,
            "y": 600
          }
        }
      },
      {
        "name": "list_of_products",
        "type": "say-play",
        "transitions": [
          {
            "next": "products_ending",
            "event": "audioComplete"
          }
        ],
        "properties": {
          "offset": {
            "x": 1410,
            "y": 140
          },
          "loop": 1,
          "say": "Our list of products includes:\n\nPlastic credit card, \n\nand so on."
        }
      },
      {
        "name": "products_ending",
        "type": "gather-input-on-call",
        "transitions": [
          {
            "next": "product_ending_digit",
            "event": "keypress"
          },
          {
            "next": "product_ending_speech",
            "event": "speech"
          },
          {
            "event": "timeout"
          }
        ],
        "properties": {
          "number_of_digits": 1,
          "speech_timeout": "auto",
          "offset": {
            "x": 1810,
            "y": 140
          },
          "loop": 1,
          "finish_on_key": "#",
          "say": "press 1 to repeat the list of products,\n\npress 0 to talk to a customer representative,\n\nor press 9 to return to the main menu",
          "stop_gather": false,
          "gather_language": "en",
          "profanity_filter": "true",
          "timeout": 5
        }
      },
      {
        "name": "product_ending_digit",
        "type": "split-based-on",
        "transitions": [
          {
            "next": "products_no_answer",
            "event": "noMatch"
          },
          {
            "next": "list_of_products",
            "event": "match",
            "conditions": [
              {
                "friendly_name": "1",
                "arguments": [
                  "{{widgets.products_ending.Digits}}"
                ],
                "type": "equal_to",
                "value": "1"
              }
            ]
          },
          {
            "next": "main_menu",
            "event": "match",
            "conditions": [
              {
                "friendly_name": "9",
                "arguments": [
                  "{{widgets.products_ending.Digits}}"
                ],
                "type": "equal_to",
                "value": "9"
              }
            ]
          },
          {
            "next": "call_say",
            "event": "match",
            "conditions": [
              {
                "friendly_name": "0",
                "arguments": [
                  "{{widgets.products_ending.Digits}}"
                ],
                "type": "equal_to",
                "value": "0"
              }
            ]
          }
        ],
        "properties": {
          "input": "{{widgets.products_ending.Digits}}",
          "offset": {
            "x": 2200,
            "y": -20
          }
        }
      },
      {
        "name": "product_ending_speech",
        "type": "split-based-on",
        "transitions": [
          {
            "next": "products_no_answer",
            "event": "noMatch"
          },
          {
            "next": "list_of_products",
            "event": "match",
            "conditions": [
              {
                "friendly_name": "1",
                "arguments": [
                  "{{widgets.products_ending.SpeechResult}}"
                ],
                "type": "equal_to",
                "value": "1"
              }
            ]
          },
          {
            "next": "main_menu",
            "event": "match",
            "conditions": [
              {
                "friendly_name": "9",
                "arguments": [
                  "{{widgets.products_ending.SpeechResult}}"
                ],
                "type": "equal_to",
                "value": "9"
              }
            ]
          },
          {
            "next": "call_say",
            "event": "match",
            "conditions": [
              {
                "friendly_name": "0",
                "arguments": [
                  "{{widgets.products_ending.SpeechResult}}"
                ],
                "type": "equal_to",
                "value": "0"
              }
            ]
          }
        ],
        "properties": {
          "input": "{{widgets.products_ending.SpeechResult}}",
          "offset": {
            "x": 2190,
            "y": 220
          }
        }
      },
      {
        "name": "products_no_answer",
        "type": "say-play",
        "transitions": [
          {
            "next": "products_ending",
            "event": "audioComplete"
          }
        ],
        "properties": {
          "offset": {
            "x": 2570,
            "y": 130
          },
          "loop": 1,
          "say": "Sorry, we were not able to get your answer"
        }
      },
      {
        "name": "list_of_promos",
        "type": "say-play",
        "transitions": [
          {
            "next": "promo_ending",
            "event": "audioComplete"
          }
        ],
        "properties": {
          "offset": {
            "x": 1360,
            "y": 620
          },
          "loop": 1,
          "say": "Earn an extra 100 points for every cannuck ticket bought using our plastic reward card. \n\nfor every person you refer, you will earn an extra 200 reward points."
        }
      },
      {
        "name": "promo_ending",
        "type": "gather-input-on-call",
        "transitions": [
          {
            "next": "promo_ending_digit",
            "event": "keypress"
          },
          {
            "next": "promo_ending_speech",
            "event": "speech"
          },
          {
            "next": "promo_ending",
            "event": "timeout"
          }
        ],
        "properties": {
          "voice": "man",
          "number_of_digits": 1,
          "speech_timeout": "auto",
          "offset": {
            "x": 1790,
            "y": 610
          },
          "loop": 1,
          "finish_on_key": "#",
          "say": "press 1 to repeat the list of promotions,\n\npress 0 to talk to a customer representative,\n\nor press 9 to return to the main menu",
          "language": "en-US",
          "stop_gather": false,
          "gather_language": "en",
          "profanity_filter": "true",
          "timeout": 5
        }
      },
      {
        "name": "promo_ending_digit",
        "type": "split-based-on",
        "transitions": [
          {
            "next": "main_menu",
            "event": "noMatch"
          },
          {
            "next": "promo_ending",
            "event": "match",
            "conditions": [
              {
                "friendly_name": "1",
                "arguments": [
                  "{{widgets.promo_ending.Digits}}"
                ],
                "type": "equal_to",
                "value": "1"
              }
            ]
          },
          {
            "next": "main_menu",
            "event": "match",
            "conditions": [
              {
                "friendly_name": "9",
                "arguments": [
                  "{{widgets.promo_ending.Digits}}"
                ],
                "type": "equal_to",
                "value": "9"
              }
            ]
          },
          {
            "next": "call_say",
            "event": "match",
            "conditions": [
              {
                "friendly_name": "0",
                "arguments": [
                  "{{widgets.promo_ending.Digits}}"
                ],
                "type": "equal_to",
                "value": "0"
              }
            ]
          }
        ],
        "properties": {
          "input": "{{widgets.promo_ending.Digits}}",
          "offset": {
            "x": 2210,
            "y": 520
          }
        }
      },
      {
        "name": "promo_ending_speech",
        "type": "split-based-on",
        "transitions": [
          {
            "next": "promo_no_answer",
            "event": "noMatch"
          },
          {
            "next": "promo_ending",
            "event": "match",
            "conditions": [
              {
                "friendly_name": "1",
                "arguments": [
                  "{{widgets.promo_ending.SpeechResult}}"
                ],
                "type": "equal_to",
                "value": "1"
              }
            ]
          },
          {
            "next": "main_menu",
            "event": "match",
            "conditions": [
              {
                "friendly_name": "9",
                "arguments": [
                  "{{widgets.promo_ending.SpeechResult}}"
                ],
                "type": "equal_to",
                "value": "9"
              }
            ]
          },
          {
            "next": "call_say",
            "event": "match",
            "conditions": [
              {
                "friendly_name": "0",
                "arguments": [
                  "{{widgets.promo_ending.SpeechResult}}"
                ],
                "type": "equal_to",
                "value": "0"
              }
            ]
          }
        ],
        "properties": {
          "input": "{{widgets.promo_ending.SpeechResult}}",
          "offset": {
            "x": 2210,
            "y": 780
          }
        }
      },
      {
        "name": "promo_no_answer",
        "type": "say-play",
        "transitions": [
          {
            "next": "promo_ending",
            "event": "audioComplete"
          }
        ],
        "properties": {
          "offset": {
            "x": 2600,
            "y": 650
          },
          "loop": 1,
          "say": "Sorry, we were not able to get your answer"
        }
      },
      {
        "name": "card_info_gather",
        "type": "gather-input-on-call",
        "transitions": [
          {
            "next": "card_info_4digit_check",
            "event": "keypress"
          },
          {
            "event": "speech"
          },
          {
            "event": "timeout"
          }
        ],
        "properties": {
          "number_of_digits": 4,
          "speech_timeout": "auto",
          "offset": {
            "x": 1290,
            "y": 1360
          },
          "loop": 1,
          "finish_on_key": "#",
          "say": "Please Enter the last 4 digits of your credit card in your keypad",
          "stop_gather": false,
          "gather_language": "en",
          "profanity_filter": "true",
          "timeout": 5
        }
      },
      {
        "name": "card_info_4digit_check",
        "type": "split-based-on",
        "transitions": [
          {
            "next": "card_info_gather",
            "event": "noMatch"
          },
          {
            "next": "card_info_pin_gather",
            "event": "match",
            "conditions": [
              {
                "friendly_name": "1212",
                "arguments": [
                  "{{widgets.card_info_gather.Digits}}"
                ],
                "type": "equal_to",
                "value": "1212"
              }
            ]
          },
          {
            "event": "match",
            "conditions": [
              {
                "friendly_name": "0",
                "arguments": [
                  "{{widgets.card_info_gather.Digits}}"
                ],
                "type": "equal_to",
                "value": "0"
              }
            ]
          }
        ],
        "properties": {
          "input": "{{widgets.card_info_gather.Digits}}",
          "offset": {
            "x": 1760,
            "y": 1160
          }
        }
      },
      {
        "name": "card_info_pin_gather",
        "type": "gather-input-on-call",
        "transitions": [
          {
            "next": "card_info_pin_check",
            "event": "keypress"
          },
          {
            "event": "speech"
          },
          {
            "next": "card_info_gather",
            "event": "timeout"
          }
        ],
        "properties": {
          "number_of_digits": 4,
          "speech_timeout": "auto",
          "offset": {
            "x": 2150,
            "y": 1160
          },
          "loop": 1,
          "finish_on_key": "#",
          "say": "Please enter the four pin number of your credit card",
          "stop_gather": false,
          "gather_language": "en",
          "profanity_filter": "true",
          "timeout": 5
        }
      },
      {
        "name": "card_info_pin_check",
        "type": "split-based-on",
        "transitions": [
          {
            "next": "card_info_pin_gather",
            "event": "noMatch"
          },
          {
            "next": "check_acc_menu",
            "event": "match",
            "conditions": [
              {
                "friendly_name": "1234",
                "arguments": [
                  "{{widgets.card_info_pin_gather.Digits}}"
                ],
                "type": "equal_to",
                "value": "1234"
              }
            ]
          }
        ],
        "properties": {
          "input": "{{widgets.card_info_pin_gather.Digits}}",
          "offset": {
            "x": 2590,
            "y": 1160
          }
        }
      },
      {
        "name": "check_acc_menu",
        "type": "gather-input-on-call",
        "transitions": [
          {
            "next": "check_acc_info",
            "event": "keypress"
          },
          {
            "event": "speech"
          },
          {
            "next": "check_acc_menu",
            "event": "timeout"
          }
        ],
        "properties": {
          "number_of_digits": 1,
          "speech_timeout": "auto",
          "offset": {
            "x": 3120,
            "y": 1070
          },
          "loop": 1,
          "finish_on_key": "#",
          "say": "Press 1 for your account balance.\n\npress 2 to get your last transaction.\n\npress 3 to know your total reward points.",
          "stop_gather": false,
          "gather_language": "en",
          "profanity_filter": "true",
          "timeout": 5
        }
      },
      {
        "name": "check_acc_info",
        "type": "split-based-on",
        "transitions": [
          {
            "next": "check_acc_menu",
            "event": "noMatch"
          },
          {
            "next": "acc_bal_say",
            "event": "match",
            "conditions": [
              {
                "friendly_name": "1",
                "arguments": [
                  "{{widgets.check_acc_menu.Digits}}"
                ],
                "type": "equal_to",
                "value": "1"
              }
            ]
          },
          {
            "next": "last_trans_say",
            "event": "match",
            "conditions": [
              {
                "friendly_name": "2",
                "arguments": [
                  "{{widgets.check_acc_menu.Digits}}"
                ],
                "type": "equal_to",
                "value": "2"
              }
            ]
          },
          {
            "next": "reward_pts_say",
            "event": "match",
            "conditions": [
              {
                "friendly_name": "3",
                "arguments": [
                  "{{widgets.check_acc_menu.Digits}}"
                ],
                "type": "equal_to",
                "value": "3"
              }
            ]
          },
          {
            "event": "match",
            "conditions": [
              {
                "friendly_name": "0",
                "arguments": [
                  "{{widgets.check_acc_menu.Digits}}"
                ],
                "type": "equal_to",
                "value": "0"
              }
            ]
          }
        ],
        "properties": {
          "input": "{{widgets.check_acc_menu.Digits}}",
          "offset": {
            "x": 3590,
            "y": 1070
          }
        }
      },
      {
        "name": "acc_bal_say",
        "type": "say-play",
        "transitions": [
          {
            "next": "acc_details_end",
            "event": "audioComplete"
          }
        ],
        "properties": {
          "offset": {
            "x": 4010,
            "y": 840
          },
          "loop": 1,
          "say": "Your account balance is. 4 thousand. three hundred. and 20 cents."
        }
      },
      {
        "name": "last_trans_say",
        "type": "say-play",
        "transitions": [
          {
            "next": "acc_details_end",
            "event": "audioComplete"
          }
        ],
        "properties": {
          "offset": {
            "x": 3990,
            "y": 1090
          },
          "loop": 1,
          "say": "your last transaction was on tuesday, first april two thousand and twenty one at one p.m. the amount credited was twenty dollars. and eighty cents."
        }
      },
      {
        "name": "reward_pts_say",
        "type": "say-play",
        "transitions": [
          {
            "next": "acc_details_end",
            "event": "audioComplete"
          }
        ],
        "properties": {
          "offset": {
            "x": 4000,
            "y": 1370
          },
          "loop": 1,
          "say": "your have eight thousand. four hundred. and twenty reward points."
        }
      },
      {
        "name": "acc_details_end",
        "type": "gather-input-on-call",
        "transitions": [
          {
            "next": "acc_detail_end_digit",
            "event": "keypress"
          },
          {
            "next": "acc_detail_end_voice",
            "event": "speech"
          },
          {
            "event": "timeout"
          }
        ],
        "properties": {
          "number_of_digits": 1,
          "speech_timeout": "auto",
          "offset": {
            "x": 4520,
            "y": 1080
          },
          "loop": 1,
          "finish_on_key": "#",
          "say": "Press 1 to do another transaction,\n\npress 9 to return to main menu\n\nor press 0 to talk to a customer representative",
          "stop_gather": false,
          "gather_language": "en",
          "profanity_filter": "true",
          "timeout": 5
        }
      },
      {
        "name": "acc_detail_end_digit",
        "type": "split-based-on",
        "transitions": [
          {
            "next": "acc_details_end",
            "event": "noMatch"
          },
          {
            "next": "main_menu",
            "event": "match",
            "conditions": [
              {
                "friendly_name": "9",
                "arguments": [
                  "{{widgets.acc_details_end.Digits}}"
                ],
                "type": "equal_to",
                "value": " 9 "
              }
            ]
          },
          {
            "next": "call_say",
            "event": "match",
            "conditions": [
              {
                "friendly_name": "0",
                "arguments": [
                  "{{widgets.acc_details_end.Digits}}"
                ],
                "type": "equal_to",
                "value": "0"
              }
            ]
          },
          {
            "next": "check_acc_menu",
            "event": "match",
            "conditions": [
              {
                "friendly_name": "1",
                "arguments": [
                  "{{widgets.acc_details_end.Digits}}"
                ],
                "type": "equal_to",
                "value": "1"
              }
            ]
          }
        ],
        "properties": {
          "input": "{{widgets.acc_details_end.Digits}}",
          "offset": {
            "x": 4920,
            "y": 1080
          }
        }
      },
      {
        "name": "acc_detail_end_voice",
        "type": "split-based-on",
        "transitions": [
          {
            "next": "acc_details_end",
            "event": "noMatch"
          },
          {
            "next": "main_menu",
            "event": "match",
            "conditions": [
              {
                "friendly_name": "9",
                "arguments": [
                  "{{widgets.acc_details_end.SpeechResult}}"
                ],
                "type": "equal_to",
                "value": "9"
              }
            ]
          },
          {
            "next": "call_say",
            "event": "match",
            "conditions": [
              {
                "friendly_name": "0",
                "arguments": [
                  "{{widgets.acc_details_end.SpeechResult}}"
                ],
                "type": "equal_to",
                "value": "0"
              }
            ]
          },
          {
            "next": "check_acc_menu",
            "event": "match",
            "conditions": [
              {
                "friendly_name": "1",
                "arguments": [
                  "{{widgets.acc_details_end.SpeechResult}}"
                ],
                "type": "equal_to",
                "value": "1"
              }
            ]
          }
        ],
        "properties": {
          "input": "{{widgets.acc_details_end.SpeechResult}}",
          "offset": {
            "x": 4910,
            "y": 1330
          }
        }
      },
      {
        "name": "become_member_say",
        "type": "say-play",
        "transitions": [
          {
            "next": "become_member_gather",
            "event": "audioComplete"
          }
        ],
        "properties": {
          "voice": "man",
          "offset": {
            "x": 1290,
            "y": 1920
          },
          "loop": 1,
          "say": "In order to become a member, you need a proof of identification and a supporting document. \n\nyou need a credit score of 300 in order to qualify for our credit card.\n\nvisit w w w dot plastk dot com slash apply in order to apply.",
          "language": "en-US"
        }
      },
      {
        "name": "become_member_gather",
        "type": "gather-input-on-call",
        "transitions": [
          {
            "next": "become_member_digit",
            "event": "keypress"
          },
          {
            "next": "become_member_voice",
            "event": "speech"
          },
          {
            "next": "become_member_say",
            "event": "timeout"
          }
        ],
        "properties": {
          "number_of_digits": 1,
          "speech_timeout": "auto",
          "offset": {
            "x": 1710,
            "y": 1910
          },
          "loop": 1,
          "finish_on_key": "#",
          "say": "to return back to the main menu, press 9.\n\nto talk to a customer representative, press 0",
          "stop_gather": false,
          "gather_language": "en",
          "profanity_filter": "true",
          "timeout": 5
        }
      },
      {
        "name": "become_member_digit",
        "type": "split-based-on",
        "transitions": [
          {
            "next": "become_member_gather",
            "event": "noMatch"
          },
          {
            "next": "main_menu",
            "event": "match",
            "conditions": [
              {
                "friendly_name": "9",
                "arguments": [
                  "{{widgets.become_member_gather.Digits}}"
                ],
                "type": "equal_to",
                "value": "9"
              }
            ]
          },
          {
            "next": "call_say",
            "event": "match",
            "conditions": [
              {
                "friendly_name": "0",
                "arguments": [
                  "{{widgets.become_member_gather.Digits}}"
                ],
                "type": "equal_to",
                "value": "0"
              }
            ]
          }
        ],
        "properties": {
          "input": "{{widgets.become_member_gather.Digits}}",
          "offset": {
            "x": 2110,
            "y": 1910
          }
        }
      },
      {
        "name": "become_member_voice",
        "type": "split-based-on",
        "transitions": [
          {
            "next": "become_member_gather",
            "event": "noMatch"
          },
          {
            "next": "main_menu",
            "event": "match",
            "conditions": [
              {
                "friendly_name": "9",
                "arguments": [
                  "{{widgets.become_member_gather.SpeechResult}}"
                ],
                "type": "equal_to",
                "value": "9"
              }
            ]
          },
          {
            "next": "call_say",
            "event": "match",
            "conditions": [
              {
                "friendly_name": "0",
                "arguments": [
                  "{{widgets.become_member_gather.SpeechResult}}"
                ],
                "type": "equal_to",
                "value": "0"
              }
            ]
          }
        ],
        "properties": {
          "input": "{{widgets.become_member_gather.SpeechResult}}",
          "offset": {
            "x": 2100,
            "y": 2180
          }
        }
      },
      {
        "name": "activate_card_16digit",
        "type": "gather-input-on-call",
        "transitions": [
          {
            "next": "activate_card_16digit_voice",
            "event": "keypress"
          },
          {
            "event": "speech"
          },
          {
            "event": "timeout"
          }
        ],
        "properties": {
          "number_of_digits": 14,
          "speech_timeout": "auto",
          "offset": {
            "x": 1250,
            "y": 2830
          },
          "loop": 1,
          "finish_on_key": "#",
          "say": "In order to begin the proces of activating your card, enter the 14 digit of the card your received",
          "stop_gather": false,
          "gather_language": "en",
          "profanity_filter": "true",
          "timeout": 5
        }
      },
      {
        "name": "activate_card_16digit_voice",
        "type": "split-based-on",
        "transitions": [
          {
            "next": "activate_card_16digit",
            "event": "noMatch"
          },
          {
            "next": "card_expiry_month_activate_gather",
            "event": "match",
            "conditions": [
              {
                "friendly_name": "12+",
                "arguments": [
                  "{{widgets.activate_card_16digit.Digits}}"
                ],
                "type": "equal_to",
                "value": "12121212121212"
              }
            ]
          }
        ],
        "properties": {
          "input": "{{widgets.activate_card_16digit.Digits}}",
          "offset": {
            "x": 1680,
            "y": 2650
          }
        }
      },
      {
        "name": "card_expiry_month_activate_gather",
        "type": "gather-input-on-call",
        "transitions": [
          {
            "next": "card_expiry_month_split",
            "event": "keypress"
          },
          {
            "event": "speech"
          },
          {
            "next": "activate_card_16digit",
            "event": "timeout"
          }
        ],
        "properties": {
          "number_of_digits": 2,
          "speech_timeout": "auto",
          "offset": {
            "x": 2090,
            "y": 2650
          },
          "loop": 1,
          "finish_on_key": "#",
          "say": "Enter the month your card will expire",
          "stop_gather": false,
          "gather_language": "en",
          "profanity_filter": "true",
          "timeout": 5
        }
      },
      {
        "name": "card_expiry_month_split",
        "type": "split-based-on",
        "transitions": [
          {
            "next": "activate_card_16digit",
            "event": "noMatch"
          },
          {
            "next": "card_expiry_year_gather",
            "event": "match",
            "conditions": [
              {
                "friendly_name": "11",
                "arguments": [
                  "{{widgets.card_expiry_month_activate_gather.Digits}}"
                ],
                "type": "equal_to",
                "value": "11"
              }
            ]
          }
        ],
        "properties": {
          "input": "{{widgets.card_expiry_month_activate_gather.Digits}}",
          "offset": {
            "x": 2500,
            "y": 2650
          }
        }
      },
      {
        "name": "card_expiry_year_gather",
        "type": "gather-input-on-call",
        "transitions": [
          {
            "next": "card_expiry_year_split",
            "event": "keypress"
          },
          {
            "event": "speech"
          },
          {
            "event": "timeout"
          }
        ],
        "properties": {
          "number_of_digits": 2,
          "speech_timeout": "auto",
          "offset": {
            "x": 2870,
            "y": 2640
          },
          "loop": 1,
          "finish_on_key": "#",
          "say": "Enter the year the card will expire",
          "stop_gather": false,
          "gather_language": "en",
          "profanity_filter": "true",
          "timeout": 5
        }
      },
      {
        "name": "card_expiry_year_split",
        "type": "split-based-on",
        "transitions": [
          {
            "next": "activate_card_16digit",
            "event": "noMatch"
          },
          {
            "next": "activate_cvv_gather",
            "event": "match",
            "conditions": [
              {
                "friendly_name": "22",
                "arguments": [
                  "{{widgets.card_expiry_year_gather.Digits}}"
                ],
                "type": "equal_to",
                "value": "22"
              }
            ]
          }
        ],
        "properties": {
          "input": "{{widgets.card_expiry_year_gather.Digits}}",
          "offset": {
            "x": 3270,
            "y": 2630
          }
        }
      },
      {
        "name": "activate_cvv_gather",
        "type": "gather-input-on-call",
        "transitions": [
          {
            "next": "activate_cvv_split",
            "event": "keypress"
          },
          {
            "event": "speech"
          },
          {
            "event": "timeout"
          }
        ],
        "properties": {
          "number_of_digits": 3,
          "speech_timeout": "auto",
          "offset": {
            "x": 3750,
            "y": 2620
          },
          "loop": 1,
          "finish_on_key": "#",
          "say": "Enter the 3 cvv digit in the back of your card to continue.",
          "stop_gather": false,
          "gather_language": "en",
          "profanity_filter": "true",
          "timeout": 5
        }
      },
      {
        "name": "activate_cvv_split",
        "type": "split-based-on",
        "transitions": [
          {
            "next": "activate_card_16digit",
            "event": "noMatch"
          },
          {
            "next": "activate_year_birth_gather",
            "event": "match",
            "conditions": [
              {
                "friendly_name": "111",
                "arguments": [
                  "{{widgets.activate_cvv_gather.Digits}}"
                ],
                "type": "equal_to",
                "value": "111"
              }
            ]
          },
          {
            "event": "match",
            "conditions": [
              {
                "friendly_name": "0",
                "arguments": [
                  "{{widgets.activate_cvv_gather.Digits}}"
                ],
                "type": "equal_to",
                "value": "0"
              }
            ]
          }
        ],
        "properties": {
          "input": "{{widgets.activate_cvv_gather.Digits}}",
          "offset": {
            "x": 4190,
            "y": 2620
          }
        }
      },
      {
        "name": "activate_year_birth_gather",
        "type": "gather-input-on-call",
        "transitions": [
          {
            "next": "activate_year_birth_split",
            "event": "keypress"
          },
          {
            "event": "speech"
          },
          {
            "event": "timeout"
          }
        ],
        "properties": {
          "number_of_digits": 4,
          "speech_timeout": "auto",
          "offset": {
            "x": 4590,
            "y": 2610
          },
          "loop": 1,
          "finish_on_key": "#",
          "say": "For security reason, please enter your year of birth",
          "stop_gather": false,
          "gather_language": "en",
          "profanity_filter": "true",
          "timeout": 5
        }
      },
      {
        "name": "activate_year_birth_split",
        "type": "split-based-on",
        "transitions": [
          {
            "next": "activate_card_16digit",
            "event": "noMatch"
          },
          {
            "next": "activation_final_gather",
            "event": "match",
            "conditions": [
              {
                "friendly_name": "1990",
                "arguments": [
                  "{{widgets.activate_year_birth_gather.Digits}}"
                ],
                "type": "equal_to",
                "value": "1990"
              }
            ]
          }
        ],
        "properties": {
          "input": "{{widgets.activate_year_birth_gather.Digits}}",
          "offset": {
            "x": 5030,
            "y": 2610
          }
        }
      },
      {
        "name": "activation_final_gather",
        "type": "gather-input-on-call",
        "transitions": [
          {
            "next": "split_9",
            "event": "keypress"
          },
          {
            "event": "speech"
          },
          {
            "event": "timeout"
          }
        ],
        "properties": {
          "number_of_digits": 1,
          "speech_timeout": "auto",
          "offset": {
            "x": 5470,
            "y": 2600
          },
          "loop": 1,
          "finish_on_key": "#",
          "say": "Thank you for using our automated call to activate your credit card. \n\nan email or text message will be sent in the next 12 hours to confirm the activation of your card.\n\nPress the pound key to return to the main menu or press 0 to speak to a customer representative.",
          "stop_gather": false,
          "gather_language": "en",
          "profanity_filter": "true",
          "timeout": 5
        }
      },
      {
        "name": "split_9",
        "type": "split-based-on",
        "transitions": [
          {
            "next": "activation_final_gather",
            "event": "noMatch"
          },
          {
            "next": "main_menu",
            "event": "match",
            "conditions": [
              {
                "friendly_name": "9",
                "arguments": [
                  "{{widgets.activation_final_gather.Digits}}"
                ],
                "type": "equal_to",
                "value": "9"
              }
            ]
          },
          {
            "next": "call_say",
            "event": "match",
            "conditions": [
              {
                "friendly_name": "0",
                "arguments": [
                  "{{widgets.activation_final_gather.Digits}}"
                ],
                "type": "equal_to",
                "value": "0"
              }
            ]
          }
        ],
        "properties": {
          "input": "{{widgets.activation_final_gather.Digits}}",
          "offset": {
            "x": 5850,
            "y": 2600
          }
        }
      },
      {
        "name": "call_say",
        "type": "say-play",
        "transitions": [
          {
            "next": "connect_call_1",
            "event": "audioComplete"
          }
        ],
        "properties": {
          "offset": {
            "x": -290,
            "y": 990
          },
          "loop": 1,
          "say": "You will be redirected to our best rep shortly."
        }
      },
      {
        "name": "function_1",
        "type": "run-function",
        "transitions": [
          {
            "next": "main_menu",
            "event": "success"
          },
          {
            "next": "call_say",
            "event": "fail"
          }
        ],
        "properties": {
          "offset": {
            "x": -760,
            "y": 1090
          },
          "url": "https://coral-goldfish-3386.twil.io/apitest"
        }
      },
      {
        "name": "connect_call_1",
        "type": "connect-call-to",
        "transitions": [
          {
            "next": "main_menu",
            "event": "callCompleted"
          },
          {
            "next": "main_menu",
            "event": "hangup"
          }
        ],
        "properties": {
          "offset": {
            "x": -310,
            "y": 1250
          },
          "caller_id": "{{contact.channel.address}}",
          "noun": "number",
          "to": "+12265059038",
          "timeout": 30
        }
      }
    ],
    "initial_state": "Trigger",
    "flags": {
      "allow_concurrent_calls": true
    }
  }