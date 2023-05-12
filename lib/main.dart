import 'package:flutter/material.dart';

void main() {
  runApp(MyApp());
}

class MyApp extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'Questioário',
      debugShowCheckedModeBanner: false,
      theme: ThemeData(
        primarySwatch: Colors.blue,
      ),
      home:  Homepage()
    );
  }
}

class Homepage extends StatelessWidget  {
   @override
    Widget build(BuildContext context) {
      return Scaffold(
        appBar: AppBar(
          title: const Text('Questionário'),
        ),
        body: Container (
          alignment: Alignment.topLeft,
          child: Column(
            mainAxisSize: MainAxisSize.min,
            children: [
              CheckboxSample(
                checked: {
                  'Chocolate': false,
                  'Morango': false,
                  'Abacaxi': false,
                },
                question: "Selecione os sabores de bolo que você mais gosta:",
              ),
              CheckboxSample(
                checked: {
                  'Amarelo': false,
                  'Verde': false,
                  'Roxo': false,
                },
                question: "Selecione quais cores você gosta",
              ),
            ]
          )
        )
      );
    }
}

class CheckboxSample extends StatefulWidget {
  final Map<String, bool> checked;
  final String question;

  const CheckboxSample(
    {
      Key? key, 
      required this.checked, 
      required this.question,
    }
  ) : super(key: key);

  @override
  CheckboxSampleState createState() => CheckboxSampleState(
    checked: checked, 
    question: question
  );
}

class CheckboxSampleState extends State<CheckboxSample> {
  final Map<String, bool> checked;
  final String question;

  CheckboxSampleState({required this.checked, required this.question});

  @override
  Widget build(BuildContext context) {
    return Padding(
      padding: const EdgeInsets.all(16.0),
        child: Column(
          crossAxisAlignment: CrossAxisAlignment.start,
          children: _buildCheckboxes(),
        ),
    );
  }

  List<Widget> _buildCheckboxes() {
    List<Widget> checkboxes = [];

    checkboxes.add(
      Text(
        question,
        style: TextStyle(fontSize: 24.0, color: Colors.blue),
      ),
    );

    checked.forEach((String key, bool value) {
      checkboxes.add(
        CheckboxListTile(
          title: Text(key),
          value: value,

          onChanged: ( newValue) {
            setState(() {
              newValue != null
                ? checked[key] == true
                  ? checked[key] = false
                  : checked[key] = true
                : checked[key] = false;  
            });
          },
        ),
      );
    });

    checkboxes.add(
      ElevatedButton(
        onPressed: () {
          _showSelected();
        },
        child: const Text('Vizualizar alternativas selecionadas'),
      ),
    );
    return checkboxes;
  }

  void _showSelected() {
    List<String> selected = [];

    checked.forEach((String key, bool value) {
      if (value) { // se valor válido
        selected.add(key);
      }
    });

    showDialog(
      context: context,
      builder: (BuildContext context) {
        return AlertDialog(
          title: const Text('Alternativas selecionadas'),
          content: selected.length != 0 
            ? Text(selected.join(', ')) 
            : Text("Nenhuma alternativa selecionada"),
          actions: [
            TextButton(
              onPressed: () {
                Navigator.of(context).pop();
              },
              child: const Text('OK'),
            ),
          ],
        );
      },
    );
  }
}