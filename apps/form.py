from django import forms

from apps.models import Machine, Company


class SearchForm(forms.Form):
    company = forms.ModelMultipleChoiceField(
        queryset=Company.objects.all().order_by('name'),
        label='Société',
        widget=forms.SelectMultiple(
            attrs={'class': 'selectpicker mr-2', 'data-style': "btn-primary", 'multiple': True,
                   "data-live-search": "true",
                   "data-header": "Choisir un Societe...", "title": "List des Societes", "data-size": "8"}),
        required=True
    )


class CompanyForm(forms.ModelForm):
    class Meta:
        model = Company
        fields = '__all__'
        widgets = {
            'name': forms.TextInput(attrs={'class': 'form-control', 'required': True}),
        }


class MachineForm(forms.ModelForm):
    class Meta:
        model = Machine
        fields = '__all__'
        labels = {
            'matriculate': 'Matricule',
            'model': 'Model',
            'description': 'Description',
            'company': 'Société'
        }
        widgets = {
            'matriculate': forms.TextInput(attrs={'class': 'form-control', 'required': True}),
            'model': forms.TextInput(attrs={'class': 'form-control', 'required': True}),
            'description': forms.Textarea(
                attrs={'class': 'form-control', 'placeholder': 'Ici les informations supplementaires',
                       'required': False}),
            'company': forms.Select(
                attrs={'class': 'selectpicker', 'data-style': "btn-primary", "data-live-search": "true",
                       "data-header": "Choisir un Societe...", "data-size": "8", 'data-width': "100%",
                       'required': True})
        }